import useStockData from "../../hooks/useStockData";
import StockChart from "../../components/StockChart";

const StockDetail = ({ params }) => {
  const { symbol } = params;
  const { data, loading, error } = useStockData(symbol);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Stock Details: {symbol}</h1>
      {data && <StockChart data={data} />}
    </div>
  );
};

export default StockDetail;
