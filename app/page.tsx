export default function Home() {
  return (
    <div className="box-border flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <section
        className="mx-auto flex w-full max-w-5xl flex-col justify-center bg-[#1a1a1a] px-8 py-16 md:px-14 md:py-24 lg:px-20"
        aria-label="Welcome"
      >
        <h1 className="font-[family-name:var(--font-geist-sans),system-ui,sans-serif] font-black uppercase leading-[0.88] tracking-[-0.02em] text-[#d1d1d1]">
          <span className="block text-[clamp(2.5rem,10vw,6.5rem)]">Welcome</span>
          <span className="block text-[clamp(2.5rem,10vw,6.5rem)]">to my</span>
          <span className="block text-[clamp(2.5rem,10vw,6.5rem)]">page.</span>
        </h1>
      </section>
    </div>
  );
}
