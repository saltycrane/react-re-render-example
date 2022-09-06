import { range } from "lodash";

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
        gridTemplateColumns: "repeat(10, 1fr)",
        height: "100%",
        padding: 10,
      }}
    >
      {range(100).map((index) => {
        return (
          <div key={index} style={{ border: "1px solid #ccc" }}>
            <small>Cell {index}</small>
          </div>
        );
      })}
    </div>
  );
}
