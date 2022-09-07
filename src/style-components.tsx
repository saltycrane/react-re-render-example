type TProps = {
  children: React.ReactNode;
};

/**
 * PageDiv
 */
export function PageDiv({ children }: TProps) {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      {children}
    </div>
  );
}

/**
 * GridDiv
 */
export function GridDiv({ children }: TProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: 10,
        gridTemplateColumns: "repeat(10, 1fr)",
      }}
    >
      {children}
    </div>
  );
}
