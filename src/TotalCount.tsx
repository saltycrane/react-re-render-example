type TProps = {
  totalCount: number;
};

export default function TotalCount({ totalCount }: TProps) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div>Total count: {totalCount}</div>
    </div>
  );
}
