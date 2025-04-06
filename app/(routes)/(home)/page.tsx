"use client";

import { TreePalm } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Link, User } from "@prisma/client";
import { LinkProfile } from "./components";
import { LoaderProfile } from "@/components/shared";

export default function HomePage() {
  const { user } = useUser();
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [reload, setReload] = useState(false);
  const [infoUser, setInfoUser] = useState<(User & { links: Link[] }) | null>(
    null,
  );

  useEffect(() => {
    const checkFirstLogin = async () => {
      const response = await fetch("/api/info-user");
      const data = await response.json();
      setInfoUser(data);
      setIsFirstVisit(data.firstLogin);
    };
    checkFirstLogin();

    if (reload) {
      checkFirstLogin();
      setReload(false);
    }
  }, [user?.id, reload, user]);

  if (!user || !infoUser) {
    return <LoaderProfile />;
  }

  if (isFirstVisit) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center font-semibold text-gray-400">
          <TreePalm className="size-20" strokeWidth={1} />
          <p className="text-2xl">Welcome to Linktree</p>
          <p className="text-sm">Create your first link</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-[60%_auto]">
        <div>
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
