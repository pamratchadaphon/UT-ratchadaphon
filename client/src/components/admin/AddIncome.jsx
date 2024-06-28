import { useState } from "react";

const AddIncome = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="bg-green-600 px-3 py-2.5 text-white rounded-lg text-sm hover:bg-green-100 hover:text-green-700 hover:duration-200"
        onClick={() => setModal(!modal)}
      >
        บันทึกรายรับ
      </button>
    </div>
  );
};

export default AddIncome;
