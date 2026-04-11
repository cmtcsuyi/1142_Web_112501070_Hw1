import Image from "next/image";
import Link from "next/link";
import Menu from "../../component/Menu";

export default function About() {
  return (
    <div className="flex min-h-screen relative">
      
      <Link href="/" className="sm:hidden absolute right-2 top-2 bg-white px-3 py-1">
        返回
      </Link>

      <div className="hidden sm:block">
        <Menu />
      </div>

      <div className="flex-1 bg-[#d1d1d1] p-8 flex justify-center items-center">
        <div className="w-full max-w-5xl font-[family-name:var(--font-geist-sans),system-ui,sans-serif] text-[#d1d1d1]">

          {/* 上方卡片 */}
          <div className="bg-[#1a1a1a] p-6 mb-8 border border-white/10">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-[-0.02em]">
              About Me
            </h2>

            <div className="flex items-center gap-4">
              <div className="bg-[#d1d1d1] w-[80px] h-[80px] rounded-full overflow-hidden animate-[spin_5s_linear_infinite]">
                <Image src="/pfpv3.jpg" alt="pfp" width={80} height={80} />
              </div>
              <p className="text-lg">
                吳梓瑄 ZiXuan Wu
              </p>
            </div>
          </div>

        {/* 下方三卡 */}
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">

          <div className="bg-[#1a1a1a] p-6 text-center border border-white/10">
            <h3 className="text-xl font-black mb-4 uppercase tracking-[-0.02em]">
              I'm from
            </h3>
            <p>Kaohsiung</p>
            <p>高雄</p>
          </div>

          <div className="bg-[#1a1a1a] p-6 text-center border border-white/10">
            <h3 className="text-xl font-black mb-4 uppercase tracking-[-0.02em]">
              Education
            </h3>
            <p>NCCU ENG</p>
            <p>NCCU DCT</p>
          </div>

          <div className="bg-[#1a1a1a] p-6 text-center border border-white/10">
            <h3 className="text-xl font-black mb-4 uppercase tracking-[-0.02em]">
              Skills & Learning
            </h3>
            <p>TOEIC 965</p>
            <p>UE4</p>
            <p>French</p>
          </div>

    </div>

  </div>
</div>

    </div>
  );
}
