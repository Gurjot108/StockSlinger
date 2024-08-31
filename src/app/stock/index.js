import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import StockList from "../../components/StockList";

const StockDashboard = () => {
  return (
    <div>
      <h1>Stock Dashboard</h1>
      <StockList stocks={[]} onSelect={() => {}} />
    </div>
  );
};

export default withPageAuthRequired(StockDashboard);
