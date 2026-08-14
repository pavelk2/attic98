import { Suspense } from "react";
import ScreenContent from "./ScreenContent";

export default function ScreenPage() {
  return (
    <Suspense fallback={null}>
      <ScreenContent />
    </Suspense>
  );
}
