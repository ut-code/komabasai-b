type Card =
  | { type: "plus"; value: number }
  | { type: "minus"; value: number }
  | { type: "multiply"; value: number }
  | { type: "divide"; value: number }
  | { type: "mod"; value: number }
  | { type: "backwards" };
export type Stage ={
  startNum:number; cards:Card[]
}
export const STAGES: Stage[] = [
  {
    startNum: 6,
    cards: [
      { type: "plus", value: 1 },
      { type: "minus", value: 1 },
      { type: "backwards" },
    ],
  },
  {
    startNum: 6,
    cards: [
      { type: "plus", value: 1 },
      { type: "minus", value: 1 },
      { type: "backwards" },
    ],
  },
  {
    startNum: 6,
    cards: [
      { type: "plus", value: 1 },
      { type: "minus", value: 1 },
      { type: "backwards" },
    ],
  },
];
