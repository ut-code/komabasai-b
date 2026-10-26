import { Link } from "react-router";

export type Stage = {
  id: number;
  name?: string | number;
  to?: string;
};

export type SelectButtonProps = {
  stage: Stage;
  className?: string;
};

export function SelectButton({ stage, className = "" }: SelectButtonProps) {
  const targetUrl = stage.to ?? `/play/${stage.id}`;
  const label = stage.name ?? stage.id;

  return (
    <Link
      to={targetUrl}
      className={`flex items-center justify-center aspect-square w-full bg-[#616161] hover:bg-[#525252] active:bg-[#3d3d3d] text-white text-xl sm:text-2xl md:text-3xl font-serif select-none transition-all duration-150 active:scale-95 ${className}`}
    >
      {label}
    </Link>
  );
}
