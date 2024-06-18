import { PieChart } from "@mui/x-charts/PieChart";
import PropTypes from "prop-types";

const All_IncomeExpense = ({ incomeExpense }) => {
  const expense = [];
  incomeExpense.map((data) =>
    data.type === "รายจ่าย" ? expense.push(data) : null
  );
  const value = Array.from({ length: 7 }, () => 0);

  for (let i = 0; i < expense.length; i++) {
    if (
      expense[i].detail === "กำจัดวัชพืช" ||
      expense[i].detail === "เก็บเกี่ยวข้าว" ||
      expense[i].detail === "ฉีดยาคุมหญ้า" ||
      expense[i].detail === "ฉีดยาฆ่าแมลง" ||
      expense[i].detail === "ฉีดยาป้องกันแมลง" ||
      expense[i].detail === "ตัดหญ้า" ||
      expense[i].detail === "ปลูกข้าว" ||
      expense[i].detail === "หว่านปุ๋ยเคมี" ||
      expense[i].detail === "หว่านเมล็ดพันธุ์ข้าว" ||
      expense[i].detail === "ย่ำนา"
    ) {
      value[0] += expense[i].price;
    } else if (
      expense[i].detail === "ปุ๋ยเกล็ด" ||
      expense[i].detail === "ปุ๋ยเคมี" ||
      expense[i].detail === "ปุ๋ยอินทรีย์" ||
      expense[i].detail === "ยาคุมหญ้า" ||
      expense[i].detail === "ยาฆ่าแมลง" ||
      expense[i].detail === "ยาป้องกันแมลง"
    ) {
      value[1] += expense[i].price;
    } else if (
      expense[i].detail === "รถเกี่ยวข้าว" ||
      expense[i].detail === "รถเข็นข้าว" ||
      expense[i].detail === "รถไถนา" ||
      expense[i].detail === "รถดำนา" ||
      expense[i].detail === "รถปั่นนา"
    ) {
      value[2] += expense[i].price;
    } else if (expense[i].detail === "น้ำมันเชื้อเพลิง") {
      value[3] += expense[i].price;
    } else if (expense[i].detail === "เช่าที่ดิน") {
      value[4] += expense[i].price;
    } else if (expense[i].detail === "เมล็ดพันธุ์ข้าว") {
      value[5] += expense[i].price;
    } else {
      value[6] += expense[i].price;
    }
  }

  const data = [
    { id: 0, value: value[0], label: "แรงงาน", color: "#7f7fff" },
    { id: 1, value: value[1], label: "ปุ๋ยและสารเคมี", color: "#76BC43" },
    {
      id: 2,
      value: value[2],
      label: "เครื่องจักรและอุปกรณ์",
      color: "#78A3D4 ",
    },
    { id: 3, value: value[3], label: "น้ำมันเชื้อเพลิง", color: "#E22427" },
    { id: 4, value: value[4], label: "เช่าที่ดิน", color: "#996633" },
    { id: 5, value: value[5], label: "เมล็ดพันธุ์ข้าว", color: "#FCCF55" },
    { id: 6, value: value[6], label: "อื่นๆ", color: "#DCDCDC" },
  ];

  return (
    <div className="bg-white border rounded-lg p-4 space-y-4 md:w-1/2 shadow-md">
      <div className="border-b pb-4">
        <span>สัดส่วนค่าใช้จ่ายในแต่ละหมวดหมู่</span>
      </div>
      <div className="">
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: {
                innerRadius: 30,
                additionalRadius: -30,
                color: "gray",
              },
             
            },
          ]}
          width={500}
          height={250}
        />
      </div>
    </div>
  );
};

All_IncomeExpense.propTypes = {
  sumExpense: PropTypes.number,
  sumIncome: PropTypes.number,
  incomeExpense: PropTypes.array,
};

export default All_IncomeExpense;
