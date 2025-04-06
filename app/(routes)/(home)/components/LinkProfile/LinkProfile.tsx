"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LinkProfile() {
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/madendevLinkTreeClone`;
    navigator.clipboard.writeText(url);
    setIsCopiedLink(true);
  };

  return (
    <div className="rounded-3xl bg-indigo-100">
      <div className="flex flex-col items-center justify-center gap-2 px-4 py-4 text-center md:flex-row md:justify-between md:text-left">
        <span className="text-sm">
          <span>🔥 Your MadeTreeClone is live:</span>
          {window.location.origin}/@madendevLinkTreeClone
          <Button
            variant="outline"
            className="rounded-full bg-white px-4 text-xs font-semibold md:text-[16px]"
            onClick={handleCopyLink}
          >
            {isCopiedLink ? (
              <span className="text-green-500">Copied!</span>
            ) : (
              <span className="text-gray-500">Copy Link</span>
            )}
          </Button>
        </span>
      </div>
    </div>
  );
}
