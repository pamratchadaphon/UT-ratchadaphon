import { PieChart } from "@mui/x-charts/PieChart";

export default function All_IncomeExpense() {
  const data = [
    { id: 0, value: 203, label: "รายจ่าย", color: "#FF9997" },
    { id: 1, value: 53, label: "รายรับ", color: "#92CEA8" },
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
}
