import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ModalAddExpense = () => {
  const [openModal, setOpenModal] = useState(false);
  const [values, setValues] = useState({
    date: new Date().toISOString().split("T")[0],
    detail: "",
    price: "",
    payee: "",
  });
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const [dataList, setDataList] = useState([]);

  const dropdownList = [
    "แรงงาน",
    "ปุ๋ยและสารเคมี",
    "เครื่องจักรและอุปกรณ์",
    "น้ำและการชลประทาน",
    "เช่าที่ดิน",
    "เมล็ดพันธุ์ข้าว",
  ];

  const dropdownData = [
    [
      "เก็บเกี่ยวข้าว",
      "ปลูกข้าว",
      "หว่านปุ๋ยเคมี",
      "หว่านเมล็ดพันธุ์ข้าว",
      "ย่ำนา",
    ],
    ["ปุ๋ยเคมี", "ปุ๋ยอินทรีย์", "ยาคุมหญ้า", "ยาฆ่าแมลง", "ยาป้องกันแมลง"],
    [
      "เครื่องมือและอุปกรณ์",
      "รถปั่นนา",
      "รถเข็นข้าว",
      "รถเกี่ยวข้าว",
      "รถดำนา",
      "รถไถนา",
    ],
    ["น้ำมันเชื้อเพลิง"],
    ["เช่าที่ดิน"],
    ["เมล็ดพันธุ์ข้าว"],
  ];

  const handleModal = () => setOpenModal(!openModal);

  const clickDropdown = () => {
    setDropdown(!dropdown);
    setDropdown1(false);
  };

  const clickDropdown1 = (index) => {
    setDataList(dropdownData[index]);
    setDropdown1(true);
  };

  const clickDetail = (string) => {
    setValues({ ...values, detail: string });
    setDropdown(false);
    setDropdown1(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "บันทึกรายจ่ายสำเร็จ",
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
        className="bg-red-400 h-36 w-36 rounded-full text-white lg:text-red-700 lg:bg-red-200 lg:hover:bg-red-500 lg:hover:text-white hover:duration-200"
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
                <form
                  className="flex flex-col space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      วันที่
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={values.date}
                      required
                      onChange={(e) =>
                        setValues({ ...values, date: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 block w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="detail"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      รายการ
                    </label>
                    <button
                      type="button"
                      className="border border-gray-300 rounded-lg p-2.5 text-sm bg-gray-50 w-full text-start flex  items-center gap-2"
                      onClick={clickDropdown}
                    >
                      <IoIosArrowDown />
                      {values.detail === "" ? "เลือกรายการ" : values.detail}
                      
                    </button>
                    <div className="relative space-x-2 max-w-md max-h-full w-full flex">
                      {dropdown ? (
                        <div className="w-1/2">
                          <ul className="bg-gray-50 shadow rounded-b-lg">
                            {dropdownList.map((d, i) => (
                              <li
                                className="flex justify-between items-center p-2 cursor-pointer text-sm hover:bg-gray-200 "
                                onClick={() => clickDropdown1(i)}
                                key={i}
                              >
                                {d}
                                <IoIosArrowForward />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {dropdown1 ? (
                        <div className="w-1/2">
                          <ul className="bg-gray-50 shadow rounded-lg">
                            {dataList.map((d, i) => (
                              <li
                                className="text-sm p-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => clickDetail(d)}
                                key={i}
                              >
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="text-sm text-gray-900 font-medium block mb-2"
                    >
                      จำนวนเงิน (บาท)
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      required
                      value={values.price}
                      onChange={(e) =>
                        setValues({ ...values, price: e.target.value })
                      }
                      className="blok bg-gray-50 border border-gray-300 rounded-lg text-gray-900 p-2.5 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="payee"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      ไปยัง
                    </label>
                    <input
                      type="text"
                      name="payee"
                      id="payee"
                      required
                      value={values.payee}
                      onChange={(e) =>
                        setValues({ ...values, payee: e.target.value })
                      }
                      className="block border w-full p-2.5 rounded-lg text-sm border-gray-300 bg-gray-50 text-gray-900"
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
                      onClick={handleModal}
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
      ) : null}
    </div>
  );
};

export default ModalAddExpense;
