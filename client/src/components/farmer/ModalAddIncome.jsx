import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const ModalAddIncome = ({
  showModalIncome,
  handleModalIncome,
  idFarmer,
  idRiceCaltivation,
}) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  const detail = "เกี่ยวข้าว"
  const [yield_rice, setYield] = useState("")
  const [rice_price_per_kg, setRice_price_per_kg] = useState("")
  const [price, setPrice] = useState("")
  const type = "รายรับ"
  const farmer_id = idFarmer
  const riceCaltivation_id = idRiceCaltivation
  

  const clickChange = (e) => {
    setRice_price_per_kg(e.target.value)
    setPrice(Number(rice_price_per_kg) *
    Number(yield_rice))
    console.log(Number(rice_price_per_kg) *
    Number(yield_rice));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(rice_price_per_kg);
    Swal.fire({
      title: "บันทึกรายรับสำเร็จ",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };
  return (
    <div>
      {showModalIncome ? (
        <div>
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-black bg-opacity-50 h-screen">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    บันทึกรายรับ
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
                    onClick={handleModalIncome}
                  >
                    <IoMdClose className="w-10 h-10" />
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form
                    className="space-y-4 flex flex-col justify-start"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        วันที่
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        รายการ
                      </label>
                      <input
                        type="text"
                        name="detail"
                        id="detail"
                        value={detail}
                        disabled
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        น้ำหนักสุทธิ (กิโลกรัม)
                      </label>
                      <input
                        type="number"
                        name="yield_rice"
                        id="yield_rice"
                        value={yield_rice}
                        onChange={(e) =>
                          setYield(e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        ราคา/กิโลกรัม
                      </label>
                      <input
                        type="number"
                        name="rice_price_per_kg"
                        id="rice_price_per_kg"
                        onChange={clickChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        จำนวนเงิน (บาท)
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value={
                          Number(rice_price_per_kg) *
                          Number(yield_rice)
                        }
                        disabled
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div className="space-x-2 flex justify-end items-center">
                      <button
                        type="submit"
                        className="text-sm bg-green-600 py-3 px-4 rounded-md text-white hover:bg-green-100 hover:text-green-700 hover:duration-200"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        onClick={handleModalIncome}
                        className="p-3 bg-slate-50 rounded-md text-sm border hover:bg-gray-100"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

ModalAddIncome.propTypes = {
  showModalIncome: PropTypes.bool,
  handleModalIncome: PropTypes.func,
  idFarmer: PropTypes.number,
  idRiceCaltivation: PropTypes.number,
};

export default ModalAddIncome;
