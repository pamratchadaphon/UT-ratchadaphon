import { PieChart } from "@mui/x-charts/PieChart";
import PropTypes from "prop-types";

const All_IncomeExpense = ({ sumExpense, sumIncome }) => {
  const data = [
    { id: 0, value: sumExpense, label: "รายจ่าย", color: "#FF9997" },
    { id: 1, value: sumIncome, label: "รายรับ", color: "#92CEA8" },
  ];

  return (
    <div className="bg-white border rounded-lg p-4 space-y-4 md:w-1/3">
      <span>กราฟแสดงรายรับรายจ่ายทั้งหมด</span>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />
    </div>
  );
};

All_IncomeExpense.propTypes = {
  sumExpense: PropTypes.number,
  sumIncome: PropTypes.number
}

export default All_IncomeExpense;