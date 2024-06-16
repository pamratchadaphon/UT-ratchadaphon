import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import PropTypes from "prop-types";

const IncomeExpensePerMonth = ({ incomeExpense, startMonth_IncomeExpense, endMonth_IncomeExpense}) => {

  const priceExpense = Array.from({ length: 12 }, () => 0);
  const priceIncome = Array.from({ length: 12 }, () => 0)

  const arrMonthIncome = [];
  const arrMonthExpense = [];
  const arrPriceIncome = [];
  const arrPriceExpense = [];

  for (let i = 0; i < incomeExpense.length; i++) {
    if (incomeExpense[i].type === "รายจ่าย") {
      arrMonthExpense[i] = new Date(incomeExpense[i].date).getMonth() + 1;
      arrPriceExpense[i] = incomeExpense[i].price;
    } else {
      arrMonthIncome[i] = new Date(incomeExpense[i].date).getMonth() + 1;
      arrPriceIncome[i] = incomeExpense[i].price;
    }
  }

  for (let i = 0; i < arrMonthExpense.length; i++) {
    priceExpense[arrMonthExpense[i] - 1] += arrPriceExpense[i];
  }

  for (let i = 0; i < arrMonthIncome.length; i++) {
    priceIncome[arrMonthIncome[i] - 1] += arrPriceIncome[i]
    
  }

  const monthString = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  const dataset = [];
  for (let i = startMonth_IncomeExpense - 1; i < endMonth_IncomeExpense; i++) {
    const monthData = {
      expense: priceExpense[i] || 0,
      income: priceIncome[i] || 0,
      month: monthString[i],
    };
    dataset.push(monthData);
  }

  const chartSetting = {
    height: 250,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 1)",
      },
    },
  };

  const valueFormatter = (value) => `${value.toLocaleString()} บาท`;

  return (
    <div className="bg-white border rounded-lg p-4 space-y-4 md:w-2/3">
      <span>กราฟแสดงการเปรียบเทียบรายรับและรายจ่าย</span>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          {
            dataKey: "expense",
            label: "รายจ่าย",
            valueFormatter,
            color: "#FF9997",
          },
          {
            dataKey: "income",
            label: "รายรับ",
            valueFormatter,
            color: "#92CEA8",
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

IncomeExpensePerMonth.propTypes = {
  incomeExpense: PropTypes.array,
  startMonth_IncomeExpense: PropTypes.number,
  endMonth_IncomeExpense: PropTypes.number
};

export default IncomeExpensePerMonth;
