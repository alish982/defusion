export type Publication = {
  slug: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  accent: string; 
};

export const publications: Publication[] = [
  {
    slug: "streaming-nepali-speech-recognition",
    date: "Aug 2026",
    category: "Speech and Voice",
    title: "Streaming Nepali Speech Recognition with Cache-Aware Conformers",
    summary: "A low-latency ASR architecture tuned for low-resource languages.",
    accent: "linear-gradient(135deg, #2b2f38 0%, #4a5568 60%, #1a1d23 100%)",
  },
  {
    slug: "cross-lingual-transfer-himalayan-dialects",
    date: "Jul 2026",
    category: "Speech and Voice",
    title: "Cross-Lingual Transfer for Low-Resource Himalayan Dialects",
    summary: "Adapting pretrained acoustic models to dialects with under 10 hours of labeled data.",
    accent: "linear-gradient(135deg, #1f2937 0%, #374151 60%, #111827 100%)",
  },
  {
    slug: "on-device-wake-word-detection",
    date: "Jun 2026",
    category: "Edge AI",
    title: "On-Device Wake-Word Detection Under 50KB with half a second time",
    summary: "A quantized keyword-spotting model that runs on microcontroller-class hardware.",
    accent: "linear-gradient(135deg, #232733 0%, #3a4150 60%, #14161c 100%)",
  },
  {
    slug: "multimodal-grounding-for-low-bandwidth",
    date: "May 2026",
    category: "Multimodal",
    title: "Multimodal Grounding for Low-Bandwidth Environments",
    summary: "Compressing vision-language alignment for intermittent connectivity settings.",
    accent: "linear-gradient(135deg, #262a35 0%, #454b5c 60%, #16181e 100%)",
  },
  {
    slug: "synthetic-data-for-endangered-languages",
    date: "Apr 2026",
    category: "Data and Ethics",
    title: "Synthetic Data Generation for Endangered Language Preservation",
    summary: "A community-in-the-loop pipeline for generating consented training data.",
    accent: "linear-gradient(135deg, #2a2e39 0%, #4b5163 60%, #17191f 100%)",
  },
  {
    slug: "efficient-fine-tuning-conformer-backbones",
    date: "Mar 2026",
    category: "Model Efficiency",
    title: "Efficient Fine-Tuning of Conformer Backbones with LoRA",
    summary: "Reaching full fine-tuning accuracy at a fraction of the trainable parameters.",
    accent: "linear-gradient(135deg, #21242e 0%, #3d4354 60%, #121319 100%)",
  },
  {
    slug: "noise-robust-transcription-field-recordings",
    date: "Feb 2026",
    category: "Speech and Voice",
    title: "Noise-Robust Transcription for Field Recordings",
    summary: "Denoising and transcription in a single pass for archival oral history audio.",
    accent: "linear-gradient(135deg, #272b36 0%, #474d5f 60%, #15171d 100%)",
  },
  {
    slug: "speaker-diarization-code-switched-speech",
    date: "Jan 2026",
    category: "Speech and Voice",
    title: "Speaker Diarization for Code-Switched Speech",
    summary: "Separating speakers reliably when conversations move fluidly between languages.",
    accent: "linear-gradient(135deg, #232630 0%, #3f465a 60%, #131419 100%)",
  },
  {
    slug: "privacy-preserving-voice-datasets",
    date: "Dec 2025",
    category: "Data and Ethics",
    title: "Privacy-Preserving Collection of Voice Datasets",
    summary: "On-device anonymization that keeps prosody while removing speaker identity.",
    accent: "linear-gradient(135deg, #262a33 0%, #454b5b 60%, #16181d 100%)",
  },
  {
    slug: "benchmarking-asr-south-asian-languages",
    date: "Nov 2025",
    category: "Evaluation",
    title: "Benchmarking ASR Across Twelve South Asian Languages",
    summary: "A shared evaluation suite exposing where current models fail and why.",
    accent: "linear-gradient(135deg, #20232c 0%, #3b4150 60%, #101216 100%)",
  },
];