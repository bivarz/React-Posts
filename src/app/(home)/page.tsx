import dynamic from "next/dynamic";
import { Suspense } from "react";
import ShareButton from "@/components/ShareButton";
import Tooltip from "@/components/Tooltip";

const DataFetcher = dynamic(() => import("@/components/DataFetcher"));
const ThemeToggle = dynamic(() => import("@/components/ThemeToogle"));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));

export default function Home() {
  return (
    <div className=" text-dark-50 h-screen bg-slate-50 dark:bg-darker-900">
      <Suspense>
        <div className="flex p-4 items-center justify-end gap-2">
          <Tooltip message="Share Url">
            <ShareButton />
          </Tooltip>
          <Tooltip message="Toggle theme">
            <ThemeToggle />
          </Tooltip>
        </div>
        <DataFetcher initialPage={1} />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}
