import { range } from "lodash";
import { useCallback, useState } from "react";

import TotalCount from "./TotalCount";
import { MemoizedCell } from "./cells";
import * as sc from "./style-components";

export default function BrokenMemoGridPage() {
  const [totalCount, setTotalCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setTotalCount((totalCount) => totalCount + 1);
  }, []);

  return (
    <sc.PageDiv>
      <h1>Broken Memo Grid</h1>
      <TotalCount totalCount={totalCount} />
      <sc.GridDiv>
        {range(100).map((index) => {
          return (
            <MemoizedCell
              index={index}
              key={index}
              onIncrement={handleIncrement}
              potentiallyMemoBreakingProp={
                /* Passing this object literal as a prop breaks memoization
                   because a new object literal is created every time this
                   component renders and two different object literals are not
                   referentially equal. A couple possible solutions: 1. define
                   the value outside of the component if it is constant 2.
                   memoize it using the `useMemo` hook. This is similar to the
                   need to `useCallback` for the `handleIncrement` click handler
                   function.  */
                {}
              }
            />
          );
        })}
      </sc.GridDiv>
    </sc.PageDiv>
  );
}
