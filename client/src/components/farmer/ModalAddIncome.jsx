import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";

const ModalAddIncome = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [values, setValues] = useState({
    date: new Date().toISOString().split("T")[0],
    detail: "เกี่ยวข้าว",
    yield: "",
    rice_price_per_kg: "",
    price: "",
  });

  const modal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    const num = Number(values.yield) * Number(values.rice_price_per_kg);
    setValues({ ...values, price: num });
  }, [values.yield, values.rice_price_per_kg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "บันทึกรายรับเสร็จสิ้น!",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
    console.log(values);
  };
  return (
    <div>
      <button
        className="bg-green-400 lg:bg-green-300 h-36 w-36 rounded-full  text-white lg:text-green-700 lg:hover:bg-green-500 lg:hover:text-white shadow-md"
        onClick={modal}
      >
        บันทึกรายรับ
      </button>
      {isOpenModal ? (
        <div>
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-slate-400 bg-opacity-60 h-screen">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    เพิ่มรายรับ
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
                    onClick={modal}
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
                        value={values.date}
                        onChange={(e) =>
                          setValues[{ ...values, date: e.target.value }]
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
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
                        value={values.detail}
                        disabled
                        onChange={(e) =>
                          setValues({ ...values, detail: e.target.value })
                        }
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        น้ำหนักสุทธิ (กิโลกรัม)
                      </label>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        onChange={(e) =>
                          setValues({ ...values, yield: e.target.value })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
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
                        onChange={(e) =>
                          setValues({
                            ...values,
                            rice_price_per_kg: e.target.value,
                          })
                        }
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
                          Number(values.rice_price_per_kg) *
                          Number(values.yield)
                        }
                        disabled
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      บันทึก
                    </button>
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

export default ModalAddIncome;
