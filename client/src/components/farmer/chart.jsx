import { useEffect, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const All_IncomeExpense = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "แรงงาน",
          "ปุ๋ยและสารเคมี",
          "เครื่องจักรและอุปกรณ์",
          "น้ำมันเชื้อเพลิง",
          "เช่าที่ดิน",
          "เมล็ดพันธุ์ข้าว",
          "อื่นๆ",
        ],
        datasets: [
          {
            label: "Expense Categories",
            data: [20, 49, 36, 67, 23, 77, 99],
            backgroundColor: [
              "#7f7fff",
              "#78A3D4",
              "#8B4513",
              "#E22427",
              "#76BC43",
              "#FCCF55",
              "#DCDCDC",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "right",
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              },
            },
          },
        },


      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="bg-white border rounded-lg p-4 space-y-4 md:w-1/3">
      <div className="">สัดส่วนค่าใช้จ่ายในแต่ละหมวดหมู่</div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default All_IncomeExpense;
