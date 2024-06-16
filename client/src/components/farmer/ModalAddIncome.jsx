import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import axios from "axios";

const ModalAddIncome = ({
  showModalIncome,
  handleModalIncome,
  farmer_id,
  riceCaltivation_id,
}) => {
  const [values, setValues] = useState({
    date: new Date().toISOString().split("T")[0],
    detail: "เกี่ยวข้าว",
    price: "",
    type: "รายรับ",
    farmer_id: farmer_id,
    riceCaltivation_id: riceCaltivation_id,
  });
  const [yield_rice, setYield] = useState({
    yield: "",
    rice_price_per_kg: "",
    rice_consumption: 0,
    seed_rice: 0,
  });

  useEffect(() => {
    setValues({ ...values, riceCaltivation_id: riceCaltivation_id });
  }, [riceCaltivation_id]);

  useEffect(() => {
    setValues({
      ...values,
      price: Number(yield_rice.yield) * Number(yield_rice.rice_price_per_kg),
    });
  }, [yield_rice.yield, yield_rice.rice_price_per_kg]);

  const [yield_input, setYield_input] = useState(false);
  const [rice_price_per_kg, setRice_price_per_kg] = useState(false);

  const check = () => {
    yield_rice.yield === "" ? setYield_input(true) : setYield_input(false);
    yield_rice.rice_price_per_kg === ""
      ? setRice_price_per_kg(true)
      : setRice_price_per_kg(false);
  };

  useEffect(() => {
    if (yield_rice.yield !== "") {
      setYield_input(false);
    }
  }, [yield_rice.yield]);
  useEffect(() => setRice_price_per_kg(false), [yield_rice.rice_price_per_kg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    check();
    if (yield_rice.yield !== "" && yield_rice.rice_price_per_kg !== "") {
      await axios.post("http://localhost:8080/incomeExpense", values);
      await axios.put(
        `http://localhost:8080/riceCaltivation/${riceCaltivation_id}`,
        yield_rice
      );
      Swal.fire({
        title: "บันทึกรายรับสำเร็จ",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
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
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
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
                        value={values.date}
                        onChange={(e) =>
                          setValues({ ...values, date: e.target.value })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
                        value={yield_rice.yield}
                        onChange={(e) =>
                          setYield({ ...yield_rice, yield: e.target.value })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                      />
                      {yield_input ? (
                        <span className="text-sm text-red-500">
                          กรุณากรอกน้ำหนักสุทธิ
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        ราคา/กิโลกรัม (บาท)
                      </label>
                      <input
                        type="number"
                        name="rice_price_per_kg"
                        id="rice_price_per_kg"
                        value={yield_rice.rice_price_per_kg}
                        onChange={(e) =>
                          setYield({
                            ...yield_rice,
                            rice_price_per_kg: e.target.value,
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                      />
                      {rice_price_per_kg ? (
                        <span className="text-sm text-red-500">
                          กรุณากรอกราคา/กิโลกรัม
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        จำนวนเงิน (บาท)
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value={values.price}
                        disabled
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          เก็บไว้บริโภค (กิโลกรัม)
                        </label>
                        <input
                          type="number"
                          name="rice_consumption"
                          id="rice_consumption"
                          value={yield_rice.rice_consumption}
                          onChange={(e) =>
                            setYield({
                              ...yield_rice,
                              rice_consumption: e.target.value,
                            })
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          เก็บไว้ทำเมล็ดพันธ์ุ (กิโลกรัม)
                        </label>
                        <input
                          type="number"
                          name="seed_rice"
                          id="seed_rice"
                          value={yield_rice.seed_rice}
                          onChange={(e) =>
                            setYield({
                              ...yield_rice,
                              seed_rice: e.target.value,
                            })
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                        />
                      </div>
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
  farmer_id: PropTypes.number,
  riceCaltivation_id: PropTypes.number,
};

export default ModalAddIncome;
