"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Diese Seite wurde auf /digital-signage-mieten verschoben.
// Client-seitiger Redirect für statischen Export (output: "export").
export default function MietenRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/digital-signage-mieten");
  }, [router]);
  return null;
}
