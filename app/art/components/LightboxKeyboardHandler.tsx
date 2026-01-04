"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface LightboxKeyboardHandlerProps {
  prevSlug: string | null;
  nextSlug: string | null;
}

export function LightboxKeyboardHandler({
  prevSlug,
  nextSlug,
}: LightboxKeyboardHandlerProps) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case "Escape":
          router.push("/art");
          break;
        case "ArrowLeft":
          if (prevSlug) {
            router.push(`/art/${prevSlug}`);
          }
          break;
        case "ArrowRight":
          if (nextSlug) {
            router.push(`/art/${nextSlug}`);
          }
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, prevSlug, nextSlug]);

  return null;
}
