import { useRouter } from "next/router";
import { memo, useState } from "react";
import useWhyDidYouUpdate from "./useWhyDidYouUpdate";

/**
 * Cell
 */
type TProps = {
  index: number;
  potentiallyMemoBreakingProp?: Record<any, any>;
  onIncrement: () => void;
};

export function Cell(props: TProps) {
  const { index, potentiallyMemoBreakingProp, onIncrement } = props;

  const router = useRouter();

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    onIncrement();
  };

  return (
    <>
      {router.query.wdyu ? <WhyDidCellUpdate {...props} /> : <LogRender />}
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
    </>
  );
}

/**
 * MemoizedCell
 */
export const MemoizedCell = memo(Cell);

/**
 * LogRender
 */
function LogRender() {
  console.log("[cells.tsx]", "render");
  return null;
}

/**
 * WhyDidCellUpdate
 */
function WhyDidCellUpdate(props: TProps) {
  useWhyDidYouUpdate("Cell", props);
  return null;
}
