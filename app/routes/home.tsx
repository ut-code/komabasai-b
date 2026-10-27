import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "タイトル画面" },
    { name: "description", content: "ゲームのタイトル画面" },
  ];
}

// 落下周期を20秒に統一
const CYCLE = 20;

// 各レーンに2つの四角形を周期の半分（CYCLE / 2 = 10秒）ずらして配置
// これにより、画面外へ抜けても次の四角形が常に途切れず降り続け、空白地帯が発生しない
const LANES = [
  { size: 60,  left: 6,  offset: 0,  opacity: 0.10 },
  { size: 140, left: 19, offset: 6,  opacity: 0.12 },
  { size: 85,  left: 32, offset: 2,  opacity: 0.11 },
  { size: 45,  left: 45, offset: 8,  opacity: 0.10 },
  { size: 120, left: 56, offset: 4,  opacity: 0.12 },
  { size: 70,  left: 68, offset: 7,  opacity: 0.11 },
  { size: 150, left: 80, offset: 1,  opacity: 0.13 },
  { size: 55,  left: 92, offset: 5,  opacity: 0.09 },
];

const SQUARES = LANES.flatMap((lane, index) => [
  {
    id: `${index}-a`,
    size: lane.size,
    left: lane.left,
    duration: CYCLE,
    delay: -lane.offset,
    opacity: lane.opacity,
  },
  {
    id: `${index}-b`,
    size: lane.size,
    left: lane.left,
    duration: CYCLE,
    delay: -(lane.offset + CYCLE / 2),
    opacity: lane.opacity,
  },
]);

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#f7f5f0] flex flex-col items-center justify-center select-none">
      {/* 背景のゆっくり上から下へ流れる四角形アニメーション */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {SQUARES.map((square) => (
          <div
            key={square.id}
            className="absolute bg-gray-400 animate-float-down rounded-none"
            style={{
              width: `${square.size}px`,
              height: `${square.size}px`,
              left: `${square.left}%`,
              top: "-220px",
              opacity: square.opacity,
              animationDuration: `${square.duration}s`,
              animationDelay: `${square.delay}s`,
            }}
          />
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center -translate-y-4">
        {/* タイトル（明朝体） */}
        <h1
          className="text-5xl md:text-7xl font-normal tracking-[0.25em] text-[#55524e] font-serif mb-24 pl-[0.25em]"
          style={{ fontFamily: "'Noto Serif JP', 'Hiragino Mincho ProN', 'Yu Mincho', serif" }}
        >
          題名
        </h1>

        {/* 開始ボタン */}
        <Link
          to="/stages"
          className="group relative inline-flex items-center justify-center w-64 md:w-72 py-4 rounded-xl text-xl md:text-2xl font-serif text-[#6b5832] bg-[#f4b855] hover:bg-[#efa93c] active:bg-[#e49c2c] shadow-[0_6px_14px_rgba(224,157,48,0.35)] hover:shadow-[0_8px_18px_rgba(224,157,48,0.45)] transition-all duration-200 ease-out active:translate-y-0.5"
          style={{ fontFamily: "'Noto Serif JP', 'Hiragino Mincho ProN', 'Yu Mincho', serif" }}
        >
          <span className="tracking-[0.35em] pl-[0.35em]">開始</span>
        </Link>
      </div>
    </div>
  );
}
