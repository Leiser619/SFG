interface ItemSlotProps {
  image?: string;
  label: string;
}

export function ItemSlot({ image, label }: ItemSlotProps) {
  return (
    <div
      className="
        group
        relative
        aspect-square
        w-full
        rounded-2xl
        border-2
        border-[#71451f]
        bg-gradient-to-br
        from-[#422313]
        to-[#1c0d07]
        p-2
        shadow-[inset_0_0_20px_rgba(0,0,0,0.7)]
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-[#c28b3c]
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]
      "
    >
      {image ? (
        <img
          src={image}
          alt={label}
          className="h-full w-full rounded-xl object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="text-3xl text-[#69452a]">+</span>
        </div>
      )}

      <div className="absolute bottom-1 left-1 right-1 rounded-lg bg-black/70 px-2 py-1 text-center">
        <span className="text-xs font-semibold text-[#d6b477]">
          {label}
        </span>
      </div>
    </div>
  );
}

interface StatProps {
  label: string;
  value: number;
}

export function Stat({ label, value }: StatProps) {
  return (
    <div className="rounded-xl border-2 border-[#71451f] bg-gradient-to-b from-[#4a2815] to-[#251108] px-3 py-3 text-center shadow-inner">
      <p className="text-xs font-bold tracking-wider text-[#9d7347]">
        {label}
      </p>

      <p className="mt-1 font-['Cinzel'] text-xl font-bold text-[#edc878]">
        {value}
      </p>
    </div>
  );
}