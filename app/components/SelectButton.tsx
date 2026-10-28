import { Link } from "react-router";
import type { Stage } from "~/stages";

export type SelectButtonProps = {
  stageNumber:number;
  className?: string;
};

export function SelectButton({ stageNumber, className = "" }: SelectButtonProps) {
  const targetUrl = `/play/${stageNumber}`;

  return (
    <Link
      to={targetUrl}
      className={`flex items-center justify-center aspect-square w-full bg-[#616161] hover:bg-[#525252] active:bg-[#3d3d3d] text-white text-xl sm:text-2xl md:text-3xl font-serif select-none transition-all duration-150 active:scale-95 ${className}`}
    >
      {stageNumber}
    </Link>
  );
}
