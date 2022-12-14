import Link from "next/link";

export default function IndexPage() {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <h1>react-re-render-example</h1>
      <ul>
        <li>
          <Link href="/non-optimized-grid">
            <a>Non-optimized Grid</a>
          </Link>{" "}
          [
          <Link href="/non-optimized-grid?wdyu=1">
            <a>
              with <code>useWhyDidYouUpdate</code> logging
            </a>
          </Link>
          ]
        </li>
        <li>
          <Link href="/optimized-grid">
            <a>Optimized Grid</a>
          </Link>{" "}
          [
          <Link href="/optimized-grid?wdyu=1">
            <a>
              with <code>useWhyDidYouUpdate</code> logging
            </a>
          </Link>
          ]
        </li>
        <li>
          <Link href="/broken-memo-grid">
            <a>Broken Memo Grid</a>
          </Link>{" "}
          [
          <Link href="/broken-memo-grid?wdyu=1">
            <a>
              with <code>useWhyDidYouUpdate</code> logging
            </a>
          </Link>
          ]
        </li>
      </ul>
    </div>
  );
}
