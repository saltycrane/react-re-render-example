import { range } from "lodash";
import { useState } from "react";

import TotalCount from "./TotalCount";
import { Cell } from "./cells";
import * as sc from "./style-components";

export default function NonOptimizedGridPage() {
  const [totalCount, setTotalCount] = useState(0);

  const handleIncrement = () => {
    setTotalCount((totalCount) => totalCount + 1);
  };

  return (
    <sc.PageDiv>
      <h1>Non-optimized Grid</h1>
      <TotalCount totalCount={totalCount} />
      <sc.GridDiv>
        {range(100).map((index) => {
          return (
            <Cell index={index} key={index} onIncrement={handleIncrement} />
          );
        })}
      </sc.GridDiv>
    </sc.PageDiv>
  );
}
