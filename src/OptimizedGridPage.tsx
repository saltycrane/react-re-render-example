import { range } from "lodash";
import { useCallback, useState } from "react";

import TotalCount from "./TotalCount";
import { MemoizedCell } from "./cells";
import * as sc from "./style-components";

export default function OptimizedGridPage() {
  const [totalCount, setTotalCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setTotalCount((totalCount) => totalCount + 1);
  }, []);

  return (
    <sc.PageDiv>
      <h1>Optimized Grid</h1>
      <TotalCount totalCount={totalCount} />
      <sc.GridDiv>
        {range(100).map((index) => {
          return (
            <MemoizedCell
              index={index}
              key={index}
              onIncrement={handleIncrement}
            />
          );
        })}
      </sc.GridDiv>
    </sc.PageDiv>
  );
}
