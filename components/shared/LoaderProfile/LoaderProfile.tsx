import { LoaderCircle } from "lucide-react";

export function LoaderProfile() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <LoaderCircle className="size-10 animate-spin text-gray-400" />
      <p className="text-gray-800">Loading Madendev Linktree Clone...</p>
    </div>
  );
}
