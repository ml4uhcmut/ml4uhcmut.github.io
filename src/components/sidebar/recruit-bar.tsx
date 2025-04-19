import Link from "next/link";

export default function RecruitBar() {
  return (
    <Link href="/recruit">
      <div className="w-[80px] overflow-hidden h-[calc(100vh-60px)] sticky hidden xl:flex top-[60px] left-0 z-[9999] bg-white items-center pl-4 text-sm text-blue-500 hover:text-blue-700 transition-colors cursor-pointer">
        <div
          className=""
          style={{
            writingMode: "sideways-lr",
          }}
        >
          RECRUIT 2025
        </div>
      </div>
    </Link>
  );
}
