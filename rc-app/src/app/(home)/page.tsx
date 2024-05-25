import DataFetcher from "@/components/datafetcher";

export default function Home() {
  return (
    <div className=" bg-darker p-8 text-dark-50 h-screen">
      <DataFetcher initialPage={1} />
    </div>
  );
}
