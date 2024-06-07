import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const chartSetting = {
  yAxis: [
    {
      label: "จำนวนเงิน (บาท)"
    },
  ],
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 1)",
    },
  },
};
const dataset = [
  {
    expense: 59,
    month: "มค.",
  },
  {
    expense: 50,
    month: "กพ.",
  },
  {
    expense: 47,
    month: "มีค.",
  },
  {
    expense: 47,
    income: 53,
    month: "มย.",
  },
];

const valueFormatter = (value) => `${value} บาท`;

export default function IncomeExpensePerMonth() {
  return (
    <div className="bg-white border rounded-lg p-4 space-y-4 md:w-2/3">
      <span>กราฟแสดงรายรับรายจ่ายต่อเดือน</span>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          { dataKey: "expense", label: "รายจ่าย", valueFormatter,color: "#FF9997" },
          { dataKey: "income", label: "รายรับ", valueFormatter , color: "#92CEA8"},
        ]}
        {...chartSetting}
      />
    </div>
  );
}
