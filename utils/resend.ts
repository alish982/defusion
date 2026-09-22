// utils/resend.ts
import { Resend } from "resend";
import { serverEnv } from "@/app/config/env";

export const resend = new Resend(serverEnv.RESEND_API_KEY);