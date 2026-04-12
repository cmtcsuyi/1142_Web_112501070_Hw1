"use client"
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Menu() {
  return (
    <div className="bg-[#1a1a1a] w-[320px] h-full p-4">
            {/*bg-[#1a1a1a] w-full shrink-0 p-4 md:w-[320px] */}
            
            <Link href="/" className="text-[#d1d1d1]">
              Home
            </Link>
            <div className="flex justify-center items-center w-full">
              <div className="bg-[#d1d1d1] w-[80px] h-[80px] rounded-full overflow-hidden">
                <Image src="/pfpv3.jpg" alt="pfp" width={80} height={80} />
              </div>
            </div>

            <div className="text-center text-[#d1d1d1] mt-4">吳梓瑄</div>
            <div className="text-center text-[#d1d1d1] mt-4">學藝不精 | 低精力 | 內向</div>

            <div className="flex mt-4 gap-4 text-[#d1d1d1] items-center justify-center">
              <a href="https://github.com/cmtcsuyi" target="_blank">
                <FaGithub size={24} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=112501070@g.nccu.edu.tw" target="_blank">
                <SiGmail size={24} />
              </a>
            </div>

            

            <Link href="/about">
              <div className="bg-[#d1d1d1] p-[16px] mt-4 rounded-md flex items-center justify-center">關於我</div>
            </Link>

            <Link href="/hobby">
              <div className="bg-[#d1d1d1] p-[16px] mt-4 rounded-md flex items-center justify-center">我的興趣</div>
            </Link>

            <Link href="/test">
              <div className="bg-[#d1d1d1] p-[16px] mt-4 rounded-md flex items-center justify-center">遊戲作品</div>
            </Link>

            <Link href="/project">
              <div className="bg-[#d1d1d1] p-[16px] mt-4 rounded-md flex items-center justify-center">其他作品</div>
            </Link>
    </div>
  );
}
