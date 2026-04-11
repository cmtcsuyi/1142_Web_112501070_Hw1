import Image from "next/image";
import Link from "next/link";
import Menu from "../../component/Menu";

export default function Hobby() {
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
              My Hobbies
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
              Listening to Music
            </h3>
            <div className="flex justify-center gap-4">
              <a href="https://open.spotify.com/track/6roE0mXv30oCP4m7jbBIkN?si=daa21977d4a0417f" target="_blank" className="relative w-[80px] aspect-square rounded-md overflow-hidden 
             border border-white/10 
             transition-all duration-300
             hover:scale-110 hover:border-white">
                <Image src="/YMIR.png" alt="YMIR" width={80} height={80} />
              </a>
              <a href="https://open.spotify.com/track/2BuJrxYKhYky20dQqTlobO?si=e050bcb5f9de4d2a" target="_blank" className="relative w-[80px] aspect-square rounded-md overflow-hidden 
             border border-white/10 
             transition-all duration-300
             hover:scale-110 hover:border-white">
                <Image src="/Keshi.png" alt="Keshi" width={80} height={80} />
              </a>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 text-center border border-white/10">
            <h3 className="text-xl font-black mb-4 uppercase tracking-[-0.02em]">
              Reading
            </h3>
            <p>Sci-fi</p>
            <p>Crime fiction</p>
          </div>

          <div className="bg-[#1a1a1a] p-6 text-center border border-white/10">
            <h3 className="text-xl font-black mb-4 uppercase tracking-[-0.02em]">
              Gaming
            </h3>
            <p>Recently playing:</p>
            <p>Gacha Games</p>
            <p>Stardew Valley</p>
            <p>Cyberpunk 2077...</p>
          </div>

    </div>

  </div>
</div>

    </div>
  );
}
