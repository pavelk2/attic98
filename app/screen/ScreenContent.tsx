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
      color: { dark: "#0f0a1f", light: "#ffffff" },
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
    <div
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex flex-col items-center justify-center p-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/c60b800f-c47a-4cd7-80ee-8ca489f97a0d.png')",
      }}
    >
      {/* Dark scrim for legibility over the background image */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-14 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-sm">
          <span className="block">Welcome to</span>
          <span className="block">
            Home Conference{number ? ` #${number}` : ""}
          </span>
        </h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center">
          <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl w-[300px]">
            <div className="bg-white rounded-2xl p-4 w-[220px] h-[220px] flex items-center justify-center">
              {whatsappQr ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={whatsappQr}
                  alt="QR code to join the WhatsApp group"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full animate-pulse bg-slate-200 rounded-xl" />
              )}
            </div>
            <p className="text-xl font-semibold">Join the WhatsApp group</p>
          </div>

          <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl w-[300px]">
            <div className="bg-white rounded-2xl p-4 w-[220px] h-[220px] flex items-center justify-center">
              {slidesQr ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={slidesQr}
                  alt="QR code to upload your slides"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full animate-pulse bg-slate-200 rounded-xl" />
              )}
            </div>
            <p className="text-xl font-semibold">Upload your slides</p>
          </div>
        </div>
      </div>
    </div>
  );
}
