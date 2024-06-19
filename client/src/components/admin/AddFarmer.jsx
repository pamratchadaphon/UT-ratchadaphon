import { useState } from "react";

const AddFarmer = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        className="text-white bg-green-600 px-4 py-2 text-sm hover:text-green-700 hover:bg-green-100 hover:duration-200 rounded-lg"
        onClick={() => setModal(!modal)}
      >
        เพิ่มชาวนา
      </button>
    </div>
  );
};

export default AddFarmer;
