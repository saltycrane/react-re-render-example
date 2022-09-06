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
          </Link>
        </li>
        <li>
          <Link href="/optimized-grid">
            <a>Optimized Grid</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
