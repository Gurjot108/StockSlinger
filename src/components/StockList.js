const StockList = ({ stocks, onSelect }) => {
  return (
    <ul>
      {stocks.map((stock) => (
        <li key={stock.symbol} onClick={() => onSelect(stock.symbol)}>
          {stock.name} ({stock.symbol})
        </li>
      ))}
    </ul>
  );
};

export default StockList;
