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
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "มค.",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "กพ.",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "มีค.",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
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
          { dataKey: "london", label: "รายจ่าย", valueFormatter },
          { dataKey: "paris", label: "รายรับ", valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
