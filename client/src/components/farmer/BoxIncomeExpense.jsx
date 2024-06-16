import PorpTypes from "prop-types";

const BoxIncomeExpense = ({ sumExpense, sumIncome }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="border border-red-300 bg-red-100 p-4 rounded-lg w-full md:w-60  flex items-center justify-between">
        <span className="text-xl font-semibold text-red-700">รายจ่าย</span>
        <span className="text-red-800">
          {sumExpense.toLocaleString()} บาท
        </span>
      </div>
      <div className="border border-green-400 bg-green-100 p-4 rounded-lg w-full md:w-60 flex items-center justify-between">
        <span className="text-xl font-semibold text-green-700">รายรับ</span>
        <span className="text-green-800 ">
          {sumIncome.toLocaleString()} บาท
        </span>
      </div>
      <div className="border border-gray-300 bg-gray-100 p-4 rounded-lg w-full md:w-60  flex justify-between items-center">
        <span className="text-xl font-semibold text-gray-700">คงเหลือ</span>
        <span className="text-gray-800">
          {(sumIncome - sumExpense).toLocaleString()} บาท
        </span>
      </div>
    </div>
  );
};

BoxIncomeExpense.propTypes = {
  sumExpense: PorpTypes.number,
  sumIncome: PorpTypes.number,
};

export default BoxIncomeExpense;
