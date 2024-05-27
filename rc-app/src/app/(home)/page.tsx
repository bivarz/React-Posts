import dynamic from "next/dynamic";
import { Suspense } from "react";

const DataFetcher = dynamic(() => import("@/components/DataFetcher"));
const ThemeToggle = dynamic(() => import("@/components/ThemeToogle"));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));

export default function Home() {
  return (
    <div className=" text-dark-50 h-screen bg-slate-50 dark:bg-darker-900">
      <Suspense>
        <ThemeToggle />
        <DataFetcher initialPage={1} />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}
