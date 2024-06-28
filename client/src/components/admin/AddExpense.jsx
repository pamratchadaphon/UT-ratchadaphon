import { useState } from "react";

const AddExpense = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="bg-red-600 px-3 py-2.5 text-white rounded-lg text-sm hover:bg-red-100 hover:text-red-700 hover:duration-200"
        onClick={() => setModal(!modal)}
      >
        บันทึกรายจ่าย
      </button>
    </div>
  );
};

export default AddExpense;
