'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "../../component/Menu";

export default function Project() {

  const [selectedProject, setSelectedProject] = useState(null);

  let projectData = {
    "1": {
      "name": "UE4遊戲-Roses and Thorns實機演示",
      "imageUrl": "/UE4.png"
    },
    "2": {
      "name": "今天去哪CHILL程式專題",
      "imageUrl": "/chill.png"
    },
    "3": {
      "name": "More incoming..."
    },
  };

  return (
    <>
      <div className="flex h-full">
        <Link href="/"className="sm:hidden absolute right-2 top-2 bg-white">
          返回
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>
        <div className="bg-red-500 w-full">
          <div className="bg-[#d1d1d1] h-full w-full p-3">

            {/* 上方卡片 */}
          <div className="bg-[#1a1a1a] p-6 mb-8 border border-white/10 font-[family-name:var(--font-geist-sans),system-ui,sans-serif] text-[#d1d1d1]">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-[-0.02em]">
              Game projects
            </h2>

            <div className="flex items-center gap-4">
              <div className="bg-[#d1d1d1] w-[80px] h-[80px] rounded-full overflow-hidden animate-[spin_5s_linear_infinite]">
                <Image src="/pfpv3.jpg" alt="pfp" width={80} height={80} />
              </div>

              <div>
                <p className="text-lg">吳梓瑄 ZiXuan Wu</p>
                <p className="text-sm text-white/60">
                  這裡收錄我的遊戲作品。
                </p>
              </div>
            </div>
          </div>

            <div className="grid grid-cols-2 gap-4 m-[26px]">

              {/* 專案一 */}
              <a href="https://www.youtube.com/watch?v=EOJe62KrPtg" target="_blank" className={`block rounded-2xl row-span-2 bg-center bg-cover relative overflow-hidden transition-all duration-300
             hover:scale-105 hover:border-white`}
                style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})`}}
              >
                
                <div className="text-white bg-black/15 w-full h-[80px] flex
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0
                ">
                  { projectData["1"]["name"] }
                </div>
              </a>

              {/* 專案二 */}
              <div className={`rounded-2xl h-[250px] bg-center bg-cover relative overflow-hidden transition-all duration-300
             hover:scale-105 hover:border-white`}
                style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})`}}
              >

                <div className="text-white bg-black/15 w-full h-[80px] flex
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0
                ">
                  { projectData["2"]["name"] }
                </div>
              </div>

              {/* incoming */}
              <div className={`rounded-2xl h-[250px] bg-[#1a1a1a] bg-center bg-cover relative overflow-hidden transition-all duration-300
             hover:scale-105 hover:border-white`}
              >

                <div className="text-white bg-white/10 w-full h-[80px] flex
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0
                ">
                  { projectData["3"]["name"] }
                </div>
              </div>


          </div>

          </div>
        </div>
      </div>
    </>
  );
}