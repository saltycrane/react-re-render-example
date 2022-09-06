import { range } from "lodash";
import { useState } from "react";

/**
 * NonOptimizedGridPage
 */
export default function NonOptimizedGridPage() {
  const [totalCount, setTotalCount] = useState(0);

  const handleIncrement = () => {
    setTotalCount((totalCount) => totalCount + 1);
  };

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <h1>Non-optimized Grid</h1>
      <TotalCount totalCount={totalCount} />
      <Grid onIncrement={handleIncrement} />
    </div>
  );
}

/**
 * Grid
 */
type TGridProps = {
  onIncrement: () => void;
};

function Grid({ onIncrement }: TGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: 10,
        gridTemplateColumns: "repeat(10, 1fr)",
      }}
    >
      {range(100).map((index) => {
        return <Cell index={index} key={index} onIncrement={onIncrement} />;
      })}
    </div>
  );
}

/**
 * Cell
 */
type TCellProps = {
  index: number;
  onIncrement: () => void;
};

function Cell({ index, onIncrement }: TCellProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    onIncrement();
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 5 }}>
      <small>
        <div>Cell {index}</div>
        <button onClick={handleClick}>Increment</button>
        <div>Count: {count}</div>
      </small>
    </div>
  );
}

/**
 * TotalCount
 */
type TTotalCountProps = {
  totalCount: number;
};

function TotalCount({ totalCount }: TTotalCountProps) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div>Total count: {totalCount}</div>
    </div>
  );
}
