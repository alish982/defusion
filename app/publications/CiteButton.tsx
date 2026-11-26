"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { useLenis } from "lenis/react";

import GradientButton from "@/components/ui/Button";
import ArrowIcon from "@/components/icons/ArrowIcon";
import CrossIcon from "@/components/icons/CrossIcon";

const COPY_LABELS = {
  idle: "Copy BibText",
  copied: "Copied",
  failed: "Copy failed",
} as const;

type CiteButtonProps = {
  bibtex: string;
  linkbutton?: boolean;
};

export default function CiteButton({
  bibtex,
  linkbutton = false,
}: CiteButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [copyStatus, setCopyStatus] =
    useState<keyof typeof COPY_LABELS>("idle");
  const lenis = useLenis();

  const unlockScroll = useCallback(() => {
    document.documentElement.style.overflow = "";
    lenis?.start();
  }, [lenis]);

  useEffect(
    () => () => {
      clearTimeout(resetTimer.current);
      unlockScroll();
    },
    [unlockScroll],
  );

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();
  };

  const closeDialog = () => dialogRef.current?.close();

  const handleClose = () => {
    unlockScroll();
    clearTimeout(resetTimer.current);
    setCopyStatus("idle");
  };

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) closeDialog();
  };

  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDialog();
    }
  };

  const copyBibtex = async () => {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    resetTimer.current = setTimeout(() => setCopyStatus("idle"), 2000);
  };

  return (
    <>
      {linkbutton ? (
        <div
          role="button"
          tabIndex={0}
          onClick={openDialog}
          onKeyDown={handleTriggerKeyDown}
          className="text-[#5CAEFF] flex gap-1.5 items-center border-b cursor-pointer hover:text-[#1f8efd] transition-all duration-300 ease-in-out"
        >
          <span className="text-[14px] lg:text-[16px] tracking-[-0.312px]">
            Cite
          </span>
          <ArrowIcon className="max-lg:w-[14px] max-lg:h-[14px]" />
        </div>
      ) : (
        <GradientButton
          type="button"
          variant="outline"
          onClick={openDialog}
          className="h-11! min-w-0 px-2!"
        >
          Cite
        </GradientButton>
      )}

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={handleDialogClick}
        aria-labelledby="cite-dialog-title"
        data-lenis-prevent
        className="m-auto max-h-[calc(100dvh-32px)]  max-w-[565px] overflow-y-auto rounded-xl bg-[#1b1b1b] text-white backdrop:bg-black/82"
      >
        <div className="flex flex-col gap-6 p-5 sm:p-6">
          <div className=" flex justify-between  items-center">
            <h2
              id="cite-dialog-title"
              className="font-creato text-[24px] font-normal leading-[1.1]"
            >
              Cite this paper
            </h2>
            <CrossIcon onClick={closeDialog} className=" cursor-pointer" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-[#151515] p-5">
              <pre className="max-w-[346px] whitespace-pre-wrap font-sans text-[14px] leading-[1.4] text-white/68 [overflow-wrap:anywhere]">
                {bibtex}
              </pre>
            </div>

            <div className="w-full">
              <GradientButton
                type="button"
                variant="subtle"
                onClick={copyBibtex}
                aria-live="polite"
                className="w-full h-12! "
              >
                {COPY_LABELS[copyStatus]}
              </GradientButton>
              {/* <GradientButton
                type="button"
                variant="outline"
                onClick={closeDialog}
                className="min-w-0 px-2!"
              >
                Close
              </GradientButton> */}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
