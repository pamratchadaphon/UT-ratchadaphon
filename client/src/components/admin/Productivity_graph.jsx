import { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import SelectProvince from "./SelectProvince";
import axios from "axios";
import Select_Year from "./Select_Year";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const BarChart = () => {
  const chartRef = useRef(null);

  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState([]);
  const [province, setProvince] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/incomeExpense");
        const data_yield = res.data.filter(
          (data) =>
            data.type === "รายรับ" &&
            data.riceCaltivation_id !== null &&
            data.farmer_id !== null &&
            new Date(data.date).getFullYear() === Number(year) &&
            data.farmer.province.includes(province)
        );
        console.log(res.data.filter((data) => data.type==='รายรับ'));
        setData(data_yield);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [year, province]);

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

  const yield_rice = Array.from({ length: 12 }, () => 0);
  const arrMonth = [];
  const arrYield = [];

  for (let i = 0; i < data.length; i++) {
    arrMonth[i] = new Date(data[i].date).getMonth() + 1;
    arrYield[i] = data[i].riceCaltivation.total_yield;
  }

  for (let i = 0; i < arrMonth.length; i++) {
    yield_rice[arrMonth[i] -1] += arrYield[i]
  }

  const dataset = [];
  for (let i = 0; i < yield_rice.length; i++) {
    const yields = {
      yield: yield_rice[i] || 0,
      month: monthString[i],
    };
    dataset.push(yields);
  }

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: monthString.map((month) => month),
        datasets: [
          {
            label: "ผลผลิต",
            data: dataset.map((data) => data.yield),
            backgroundColor: ["#7f7fff"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `ผลผลิต : ${tooltipItem.raw.toLocaleString()} กิโลกรัม`;
              },
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [dataset, monthString]);

  return (
    <div className="bg-gray-50 rounded-lg w-full lg:w-2/3 p-4 shadow">
      ผลผลิตปีล่าสุด
      <div className="flex gap-2 mt-4">
        <Select_Year setYear={setYear} />
        <SelectProvince setProvince={setProvince} />
      </div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;