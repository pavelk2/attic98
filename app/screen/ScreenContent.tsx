"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/EZ0pL2SAd315rDXsj4Be5Z?s=cl&p=i&ilr=2";
const SLIDES_FOLDER_URL =
  "https://drive.google.com/drive/folders/185kDcQyEG7te1oOt4DQO7KylzJddAFyY?usp=sharing";

function useQrCode(url: string) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(url, {
      width: 320,
      margin: 1,
      color: { dark: "#000000", light: "#ffffff" },
    }).then((result) => {
      if (!cancelled) setDataUrl(result);
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return dataUrl;
}

export default function ScreenContent() {
  const searchParams = useSearchParams();
  const [hashNumber] = useState<string | null>(() =>
    typeof window === "undefined"
      ? null
      : window.location.hash.replace(/^#/, "") || null
  );

  const number =
    searchParams.get("number") ?? searchParams.get("n") ?? hashNumber;

  const whatsappQr = useQrCode(WHATSAPP_URL);
  const slidesQr = useQrCode(SLIDES_FOLDER_URL);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black flex flex-col items-center justify-center p-10">
      {/* Ink-blot blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-black rounded-full filter blur-3xl opacity-[0.07] animate-blob" />
        <div className="absolute top-[10%] right-[-15%] w-[50vw] h-[50vw] bg-neutral-800 rounded-full filter blur-3xl opacity-[0.08] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-15%] left-[10%] w-[45vw] h-[45vw] bg-black rounded-full filter blur-3xl opacity-[0.06] animate-blob animation-delay-4000" />
        <div className="absolute bottom-[-10%] right-[5%] w-[35vw] h-[35vw] bg-neutral-700 rounded-full filter blur-3xl opacity-[0.07] animate-blob animation-delay-6000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-14 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
          <span className="block">Welcome to</span>
          <span className="block">
            Home Conference{number ? ` #${number}` : ""}
          </span>
        </h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center">
          <div className="flex flex-col items-center gap-4 bg-white rounded-3xl p-8 border-2 border-black shadow-xl">
            <div className="bg-white rounded-2xl p-4 w-[220px] h-[220px] flex items-center justify-center">
              {whatsappQr ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={whatsappQr}
                  alt="QR code to join the WhatsApp group"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full animate-pulse bg-neutral-200 rounded-xl" />
              )}
            </div>
            <p className="text-xl font-semibold">
              {"\u{1F4AC}"} Join the WhatsApp group
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 bg-white rounded-3xl p-8 border-2 border-black shadow-xl">
            <div className="bg-white rounded-2xl p-4 w-[220px] h-[220px] flex items-center justify-center">
              {slidesQr ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={slidesQr}
                  alt="QR code to upload your slides"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full animate-pulse bg-neutral-200 rounded-xl" />
              )}
            </div>
            <p className="text-xl font-semibold">
              {"\u{1F4CA}"} Upload your slides
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
