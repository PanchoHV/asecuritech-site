"use client";

import { useScrollTracking } from "@/hooks/useScrollTracking";

export default function AnalyticsBoundary() {
  useScrollTracking();
  return null;
}
