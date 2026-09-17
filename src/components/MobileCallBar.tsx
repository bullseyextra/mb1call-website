import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${site.phoneTel}`}
          className="rounded-full border border-white/20 px-3 py-2.5 text-center text-sm font-semibold text-white"
        >
          Call {site.phoneDisplay}
        </a>
        <a
          href={site.jotforms.order}
          className="rounded-full bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order now
        </a>
      </div>
    </div>
  );
}
