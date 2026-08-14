"use client";

import dynamic from "next/dynamic";

const ScreenContent = dynamic(() => import("./ScreenContent"), {
  ssr: false,
});

export default function ScreenPage() {
  return <ScreenContent />;
}
