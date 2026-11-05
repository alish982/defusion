"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useLenis } from "lenis/react";

import GradientButton from "@/components/ui/Button";

const COPY_LABELS = {
  idle: "Copy BibTeX",
  copied: "Copied",
  failed: "Copy failed",
};

export default function CiteButton({ bibtex }: { bibtex: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [copyStatus, setCopyStatus] =
    useState<keyof typeof COPY_LABELS>("idle");
  const lenis = useLenis();

  const unlockScroll = useCallback(() => {
    document.documentElement.style.overflow = "";
    lenis?.start();
  }, [lenis]);

  // Also covers leaving the page with the dialog open, such as browser back,
  // where the dialog's close event never fires.
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

  // Fires for every way of closing, including the Esc key.
  const handleClose = () => {
    unlockScroll();
    clearTimeout(resetTimer.current);
    setCopyStatus("idle");
  };

  // The dialog has no padding of its own, so it is only the click target when
  // the click lands on the backdrop.
  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) closeDialog();
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
      <GradientButton
        type="button"
        variant="outline"
        onClick={openDialog}
        className="h-11! min-w-0 px-2!"
      >
        Cite
      </GradientButton>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={handleDialogClick}
        aria-labelledby="cite-dialog-title"
        data-lenis-prevent
        className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[565px] overflow-y-auto rounded-xl bg-[#1b1b1b] text-white backdrop:bg-black/82"
      >
        <div className="flex flex-col gap-5 p-5 sm:p-8">
          <h2
            id="cite-dialog-title"
            className="font-creato text-[32px] font-normal leading-[1.1]"
          >
            Cite this paper
          </h2>

          <div className="flex flex-col gap-7">
            <div className="rounded-lg bg-[#151515] p-5">
              <pre className="max-w-[380px] whitespace-pre-wrap font-sans text-[14px] leading-[1.4] text-white/68 [overflow-wrap:anywhere]">
                {bibtex}
              </pre>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <GradientButton
                type="button"
                variant="subtle"
                onClick={copyBibtex}
                aria-live="polite"
                className="min-w-0 px-2!"
              >
                {COPY_LABELS[copyStatus]}
              </GradientButton>
              <GradientButton
                type="button"
                variant="outline"
                onClick={closeDialog}
                className="min-w-0 px-2!"
              >
                Close
              </GradientButton>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
