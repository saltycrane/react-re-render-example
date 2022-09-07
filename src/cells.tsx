import { memo, useState } from "react";

/**
 * Cell
 */
type TProps = {
  index: number;
  potentiallyMemoBreakingProp?: Record<any, any>;
  onIncrement: () => void;
};

export function Cell({
  index,
  potentiallyMemoBreakingProp,
  onIncrement,
}: TProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    onIncrement();
  };

  console.log("[cells.tsx]", "render");

  return (
    <div style={{ border: "1px solid #ccc", padding: 5 }}>
      <small>
        <div>Cell {index}</div>
        <button onClick={handleClick}>Increment</button>
        <div>Count: {count}</div>
        <div style={{ display: "none" }}>
          {JSON.stringify(potentiallyMemoBreakingProp)}
        </div>
      </small>
    </div>
  );
}

/**
 * MemoizedCell
 */
export const MemoizedCell = memo(Cell);
