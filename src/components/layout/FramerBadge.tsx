export function FramerBadge() {
  return (
<div className="flex justify-end pointer-events-none fixed w-full bottom-0 p-5 z-[2147483647]">
  <a href="https://www.framer.com/" aria-label="Light" className="block relative w-[140px] h-[38px] text-[rgb(0,_0,_238)] gap-[10px]">
    <div aria-label="Backdrop" className="bottom-px left-px overflow-hidden absolute right-px top-px bg-white shadow-[rgba(0,0,0,0.17)_0px_0.602187px_1.56569px_-1.5px,_rgba(0,0,0,0.14)_0px_2.28853px_5.95019px_-3px,_rgba(0,0,0,0.02)_0px_10px_26px_-4.5px] rounded-[0.625rem]"></div>
    <div aria-label="Content" className="content-center items-center flex size-min justify-start absolute left-[50%] top-[50%] gap-[10px] translate-x-[-50%] translate-y-[-50%]">
      <div className="relative w-3 h-4 shrink-[0]">
        <div aria-label="Logo" className="absolute w-3 left-[50%] top-[-2px] aspect-[0.6_/_1] bg-black translate-x-[-50%]"></div>
      </div>
      <p className="absolute scale-[0.001_0.001]"></p>
      <div aria-label="Text" className="relative w-[97px] aspect-[9.7_/_1] bg-black shrink-[0]"></div>
    </div>
    <div aria-label="Bottom" className="pointer-events-none absolute left-0 top-0 right-0 bottom-0 shadow-[rgb(0,0,0)_0px_0px_0px_1px_inset] opacity-[0.06] rounded-[0.6875rem]"></div>
    <div aria-label="Border" className="pointer-events-none absolute left-0 top-0 right-0 bottom-0 shadow-[rgb(0,0,0)_0px_0px_0px_1px_inset] opacity-[0.04] rounded-[0.6875rem]"></div>
  </a>
</div>
  );
}

