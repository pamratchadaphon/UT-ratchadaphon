import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";

const ModalAddExpense = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => setOpenModal(!openModal);

  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "บันทึกรายจ่ายสำเร็จ",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }
  return (
    <div>
      <button
        className="bg-red-400 h-36 w-36 rounded-full text-white lg:text-red-700 lg:bg-red-200 lg:hover:bg-red-500 lg:hover:text-white"
        onClick={handleModal}
      >
        บันทึกรายจ่าย
      </button>

      {openModal ? (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 max-h-full flex justify-center items-center bg-black bg-opacity-50 h-screen">
          <div className="relative p-4 w-full max-w-md max-h-full ">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  บันทึกรายจ่าย
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={handleModal}
                >
                  <IoMdClose className="w-10 h-10" />
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <label className="block text-sm font-medium text-gray-900">
                    วันที่
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 block"
                  />
                  <label className="block text-sm font-medium text-gray-900">
                    รายการ
                  </label>
                  <select
                    name="detail"
                    id="detail"
                    required
                    className="bg-gray-50 p-2.5 text-sm rounded-lg border border-gray-300 text-gray-900"
                  >
                    <option value="">เลือกรายการ</option>
                  </select>
                  <label className="text-sm text-gray-900 font-medium block">
                    จำนวนเงิน (บาท)
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    required
                    className="blok bg-gray-50 border border-gray-300 rounded-lg text-gray-900 p-2.5 text-sm"
                  />
                  <button
                    type="submit"
                    className="text-sm bg-blue-700 p-2.5 rounded-lg text-white hover:bg-red-100 hover:text-red-700 hover:shadow"
                  >
                    บันทึก
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalAddExpense;
