const BoxIncomeExpense = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="border border-red-300 bg-red-100 p-4 flex md:flex-col rounded-lg w-full md:w-60 justify-between items-center md:items-start">
        <span className="text-xl font-semibold text-red-700">รายจ่าย</span>
        <span className="text-sm text-red-800">10,000 บาท</span>
      </div>
      <div className="border border-green-400 bg-green-100 p-4 flex md:flex-col rounded-lg w-full md:w-60 justify-between items-center md:items-start">
        <span className="text-xl font-semibold text-green-700">รายรับ</span>
        <span className="text-sm text-green-800">10,000 บาท</span>
      </div>
      <div className="border border-gray-300 bg-gray-100 p-4 flex md:flex-col rounded-lg w-full md:w-60 justify-between items-center md:items-start">
        <span className="text-xl font-semibold text-gray-700">คงเหลือ</span>
        <span className="text-sm text-gray-800">0 บาท</span>
      </div>
    </div>
  );
};

export default BoxIncomeExpense;
