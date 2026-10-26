import type { Route } from "./+types/stages";
import type { Stage } from "~/components/SelectButton";
import { SelectButton } from "~/components/SelectButton";

export type { Stage };

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ステージ選択" },
    { name: "description", content: "ステージ選択画面" },
  ];
}

// 1〜12のステージデータ(ダミー）
const stages: Stage[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: i + 1,
  to: `/play/${i + 1}`,
}));

export default function StageSelect() {
  return (
    <main className="min-h-screen w-full bg-[#faf8f3] flex flex-col items-center pt-16 sm:pt-24 pb-16 px-4 sm:px-8">
      <div className="w-full max-w-[640px]">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#1a1a1a] mb-8 sm:mb-10 pl-0.5 select-none">
          ステージ選択
        </h1>
        <div className="grid grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full">
          {stages.map((stage) => (
            <SelectButton key={stage.id} stage={stage} />
          ))}
        </div>
      </div>
    </main>
  );
}
