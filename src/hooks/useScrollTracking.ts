"use client";

import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/tracking";

export function useScrollTracking() {
  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const depth = Math.round((window.scrollY / total) * 100);
      if (depth === 25 || depth === 50 || depth === 75 || depth >= 90) {
        trackScrollDepth(depth);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
