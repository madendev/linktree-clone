import { TreePalm } from "lucide-react";
import React from "react";
import LinkProfile from "./components/LinkProfile/LinkProfile";

export default function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-[60%_auto]">
        <div>
          {/* LinkProfile */}

          <LinkProfile />

          {/* LinkProfile */}
          <div>
            <p>Profile info...</p>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center py-10 text-center font-semibold text-gray-400">
              <TreePalm className="size-20" strokeWidth={1} />
              <p className="text-2xl">No links yet</p>
              <p className="text-sm">Create your first link</p>
            </div>
          </div>
        </div>
        <div>
          {/* Profile Preview */}
          <div>
            <p>Profile preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}
