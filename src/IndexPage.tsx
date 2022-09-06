import { range } from "lodash";
import { useState } from "react";

/**
 * IndexPage
 */
export default function IndexPage() {
  return <Grid />;
}

/**
 * Grid
 */
function Grid() {
  return (
    <div
      style={{
        display: "grid",
        gap: 10,
        gridTemplateColumns: "repeat(10, 1fr)",
        height: "100%",
        padding: 10,
      }}
    >
      {range(100).map((index) => {
        return <Cell index={index} key={index} />;
      })}
    </div>
  );
}

/**
 * Cell
 */
type TCellProps = {
  index: number;
};

function Cell({ index }: TCellProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
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
