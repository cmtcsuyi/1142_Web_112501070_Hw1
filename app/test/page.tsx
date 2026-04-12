'use client';

import Image from "next/image";
import Link from "next/link";
import Menu from "../../component/Menu";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Test() {

  const [current, setCurrent] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
  
      const x = e.clientX;
      const y = e.clientY;
  
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;
  
      const rotateX = -(y - centerY) / 30;
      const rotateY = (x - centerX) / 30;
  
      if (cardRef.current) {
        cardRef.current.style.transform =
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projectList = [
    {
      name: "UE4遊戲-Roses and Thorns演示",
      imageUrl: "/UE4.png",
      link: "https://www.youtube.com/watch?v=EOJe62KrPtg"
    },
    {
      name: "2D平台跳躍遊戲演示",
      imageUrl: "/zebragovid.png",
      link: "https://youtube.com/playlist?list=PLmmj9Z8vQsf8k7gLLPZ6o9-bb2Hn0TA3r&si=x8pMyO65TCJg8mmr"
    },
    {
      name: "More to come..."
    }
  ];

  return (
    <>
      <div className="flex h-full overflow-hidden">

        {/* 手機返回 */}
        <Link href="/" className="sm:hidden absolute right-2 top-2 bg-white px-2 py-1">
          返回
        </Link>

        {/* 電腦版 Menu */}
        <div className="sm:block hidden">
          <Menu />
        </div>

        {/* 主內容 */}
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

            {/* 卡片切換區 */}
            <div className="flex items-center justify-center gap-8 mt-10">

              {/* 左箭頭 */}
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0 ? projectList.length - 1 : prev - 1
                  )
                }
                className="group cursor-pointer active:scale-90"
              >
                <svg width="80" height="80" viewBox="0 0 100 100">

                  {/* 上線 */}
                  <line
                    x1="65"
                    y1="25"
                    x2="35"
                    y2="50"
                    stroke="#666"
                    strokeWidth="3"
                    className="transition-all duration-300
                              group-hover:-translate-x-2 group-hover:-translate-y-2
                              stroke-[#666]
                              group-active:stroke-[#d6d6d6]"
                  />

                  {/* 下線 */}
                  <line
                    x1="65"
                    y1="75"
                    x2="35"
                    y2="50"
                    stroke="#666"
                    strokeWidth="3"
                    className="transition-all duration-300
                              group-hover:-translate-x-2 group-hover:translate-y-2
                              stroke-[#666]
                              group-active:stroke-[#d6d6d6]"
                  />

                </svg>
              </button>

              {/* 中間卡片 */}
              <div
                onClick={() => {
                  if (projectList[current].link) {
                    window.open(projectList[current].link, "_blank");
                  }
                }}
                ref={cardRef}
                className="cursor-pointer w-[600px] h-[350px] rounded-2xl relative overflow-hidden
                          bg-center bg-cover transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-2xl ease-out"
                style={{

                  backgroundImage: projectList[current].imageUrl
                    ? `url(${projectList[current].imageUrl})`
                    : "none",
                  backgroundColor: !projectList[current].imageUrl
                    ? "#1a1a1a"
                    : ""
                }}
>
                <div className="absolute bottom-0 w-full h-[80px] flex justify-center items-center text-white bg-black/30 backdrop-blur-sm">
                  {projectList[current].name}
                </div>
              </div>

              {/* 右箭頭 */}
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    (prev + 1) % projectList.length
                  )
                }
                className="group cursor-pointer active:scale-90"
              >
                <svg width="80" height="80" viewBox="0 0 100 100">

                  {/* 上線 */}
                  <line
                    x1="35"
                    y1="25"
                    x2="65"
                    y2="50"
                    stroke="#666"
                    strokeWidth="3"
                    className="transition-all duration-300
                              group-hover:-translate-x-2 group-hover:-translate-y-2
                              stroke-[#666]
                              group-active:stroke-[#d6d6d6]"
                  />

                  {/* 下線 */}
                  <line
                    x1="35"
                    y1="75"
                    x2="65"
                    y2="50"
                    stroke="#666"
                    strokeWidth="3"
                    className="transition-all duration-300
                              group-hover:-translate-x-2 group-hover:translate-y-2
                              stroke-[#666]
                              group-active:stroke-[#d6d6d6]"
                  />

                </svg>
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}