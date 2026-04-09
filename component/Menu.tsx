"use client"
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="bg-white w-[320px] h-full p-4"> 
            {/*bg-[#1a1a1a] w-full shrink-0 p-4 md:w-[320px] */}
            
            <div className="flex justify-center items-center w-full">
              <div className="bg-[#d1d1d1] w-[80px] h-[80px] rounded-full overflow-hidden">
                <Image src="/pfpv3.jpg" alt="pfp" width={80} height={80} />
              </div>
            </div>

            <div className="text-center text-[#d1d1d1]">吳梓瑄</div>
            <div className="text-center text-[#d1d1d1]">政大英文系</div>

            <div className="flex gap-2 text-[#d1d1d1] items-center justify-center">
              <div>社群連結</div>
              <div>社群連結</div>
              <div>社群連結</div>
            </div>

            

            <Link href="/about">
              <div className="bg-[#d1d1d1] p-[16px] rounded-md">關於我</div>
            </Link>

            <Link href="/hobby">
              <div className="bg-[#d1d1d1] p-[16px] mt-2 rounded-md">我的興趣</div>
            </Link>

            <Link href="/projects">
              <div className="bg-[#d1d1d1] p-[16px] mt-2 rounded-md">專案/作品</div>
            </Link>

            <Link href="/">
              <div className="bg-[#d1d1d1] p-[16px] mt-2 rounded-md">回首頁</div>
            </Link>
    </div>
  );
}
