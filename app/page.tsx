import Menu from "../component/Menu"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      
      <div className="sm:block hidden">
        <Menu />
      </div>
      <div className="hidden sm:flex flex-1 box-border min-h-screen flex-col items-center justify-center p-4 md:p-8">
        <section
          className="mx-auto flex max-w-5xl flex-col justify-center bg-[#1a1a1a] px-8 py-16 md:px-14 md:py-24 lg:px-20"
          aria-label="Welcome"
        >
          <h1 className="font-[family-name:var(--font-geist-sans),system-ui,sans-serif] font-black uppercase leading-[0.88] tracking-[-0.02em] text-[#d1d1d1]">
            <span className="block text-[clamp(2.5rem,10vw,6.5rem)]">Welcome</span>
            <span className="block text-[clamp(2.5rem,10vw,6.5rem)]">to my</span>
            <span className="block text-[clamp(2.5rem,10vw,6.5rem)]">page.</span>
          </h1>
        </section>
      </div>

      {/* 手機版本 */}
      <div className="sm:hidden flex justify-center items-center w-full min-h-screen">
        <Menu />
      </div>
    </div>
  );
}
