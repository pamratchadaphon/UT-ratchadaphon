import { useState } from "react";

const ModalAddExpense = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => setOpenModal(!openModal);
  return (
    <div>
      <button
        className="bg-red-400 h-36 w-36 rounded-full text-white lg:text-red-700 lg:bg-red-200 lg:hover:bg-red-500 lg:hover:text-white"
        onClick={handleModal}
      >
        รายจ่าย
      </button>

      {openModal ? (
        <div className="bg-black bg-opacity-60 h-screen w-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-start item">
            <div className="bg-white p-6">
                aa
            </div>
            <div>
                vv
            </div>
            <div>
                <input type="text" />
            </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalAddExpense;
