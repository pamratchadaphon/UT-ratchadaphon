import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import axios from "axios";

const Edit_Expense = ({
  edit_Expense,
  handleModalExpense,
  income_expense_id,
  riceCaltivation_id,
}) => {
  const [values, setValues] = useState({
    date: "",
    detail: "",
    price: "",
    payee: "",
  });

  const [dropdown, setDropdown] = useState(false);
  const [payees, setPayees] = useState([]);
  const [detail, setDetail] = useState("");

  const clickDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleDetail = (e) => {
    setValues({ ...values, detail: e.target.value });
    setDropdown(!dropdown);
  };

  const Detail = (string) => {
    setValues({ ...values, detail: string });
    setDropdown(!dropdown);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resExpense = await axios.get(
        `http://localhost:8080/incomeExpense/${income_expense_id}`
      );
      const date = new Date(resExpense.data.date);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formatDate = `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
      setValues({
        ...values,
        date: formatDate,
        detail: resExpense.data.detail,
        price: resExpense.data.price,
        payee: resExpense.data.payee,
      });
      const res = await axios.get(
        `http://localhost:8080/riceCaltivation/incomeExpense/${riceCaltivation_id}`
      );
      const incomeExpense = res.data[0].incomeExpense;
      const arr = [];
      incomeExpense.map((data) =>
        data.type === "รายจ่าย" ? arr.push(data.payee) : null
      );
      setPayees(arr);
    };
    fetchData();
  }, [income_expense_id]);

  return (
    <div>
      {edit_Expense ? (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 max-h-full flex justify-center items-center bg-black bg-opacity-10 h-screen">
          <div className="relative p-4 w-full max-w-md max-h-full ">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  แก้ไขรายจ่าย {income_expense_id}
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={handleModalExpense}
                >
                  <IoMdClose className="w-10 h-10" />
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form
                  className="flex flex-col space-y-4"
                  //   onSubmit={handleSubmit}
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
                      className="border border-gray-300 rounded-lg p-2.5 text-sm bg-gray-50 w-full text-start flex  items-center justify-between gap-2"
                      onClick={clickDropdown}
                      required
                    >
                      {values.detail === "" ? "เลือกรายการ" : values.detail}
                      <IoIosArrowDown />
                    </button>

                    {dropdown ? (
                      <div className="relative max-w-md max-h-full w-full p-4 border rounded-lg shadow-lg">
                        <div className="text-sm space-y-2">
                          <select
                            name=""
                            id=""
                            className="w-full"
                            onChange={handleDetail}
                          >
                            <option value="">แรงงาน</option>
                            <option value="เก็บเกี่ยวข้าว">
                              เก็บเกี่ยวข้าว
                            </option>
                            <option value="ฉีดยาคุมหญ้า">ฉีดยาคุมหญ้า</option>
                            <option value="ฉีดยาฆ่าแมลง">ฉีดยาฆ่าแมลง</option>
                            <option value="ฉีดยาป้องกันแมลง">
                              ฉีดยาป้องกันแมลง
                            </option>
                            <option value="ตัดหญ้า">ตัดหญ้า</option>
                            <option value="ปลูกข้าว">ปลูกข้าว</option>
                            <option value="หว่านปุ๋ยเคมี">หว่านปุ๋ยเคมี</option>
                            <option value="หว่านเมล็ดพันธุ์ข้าว">
                              หว่านเมล็ดพันธุ์ข้าว
                            </option>
                            <option value="ย่ำนา">ย่ำนา</option>
                          </select>
                          <select
                            name=""
                            id=""
                            className="w-full"
                            onChange={handleDetail}
                          >
                            <option value="">ปุ๋ยและสารเคมี</option>
                            <option value="ปุ๋ยเคมี">ปุ๋ยเคมี</option>
                            <option value="ปุ๋ยอินทรีย์">ปุ๋ยอินทรีย์</option>
                            <option value="ยาคุมหญ้า">ยาคุมหญ้า</option>
                            <option value="ยาฆ่าแมลง">ยาฆ่าแมลง</option>
                            <option value="ยาป้องกันแมลง">ยาป้องกันแมลง</option>
                          </select>
                          <select
                            name=""
                            id=""
                            className="w-full"
                            onChange={handleDetail}
                          >
                            <option value="">เครื่องจักรและอุปกรณ์</option>
                            <option value="รถเกี่ยวข้าว">รถเกี่ยวข้าว</option>
                            <option value="รถเข็นข้าว">รถเข็นข้าว</option>
                            <option value="รถไถนา">รถไถนา</option>
                            <option value="รถดำนา">รถดำนา</option>
                            <option value="รถปั่นนา">รถปั่นนา</option>
                          </select>
                          <select
                            name=""
                            id=""
                            className="w-full"
                            onChange={handleDetail}
                          >
                            <option value="">น้ำมันเชื้อเพลิง</option>
                            <option value="น้ำมันเชื้อเพลิง">
                              น้ำมันเชื้อเพลิง
                            </option>
                          </select>
                          <select
                            name=""
                            id=""
                            className="w-full"
                            onChange={handleDetail}
                          >
                            <option value="">เช่าที่ดิน</option>
                            <option value="เช่าที่ดิน">เช่าที่ดิน</option>
                          </select>
                          <select
                            name=""
                            id=""
                            className="w-full"
                            onChange={handleDetail}
                          >
                            <option value="">เมล็ดพันธุ์ข้าว</option>
                            <option value="เมล็ดพันธุ์ข้าว">
                              เมล็ดพันธุ์ข้าว
                            </option>
                          </select>
                          <div className="flex space-x-1">
                            <input
                              type="text"
                              name="detail"
                              id="detail"
                              value={detail}
                              onChange={(e) => setDetail(e.target.value)}
                              placeholder="อื่นๆ"
                              className="blok bg-gray-100 rounded-lg text-gray-900 p-2.5 text-sm w-full"
                            />
                            <button
                              type="button"
                              className="p-2.5 bg-slate-100 rounded-md text-sm border hover:bg-gray-200"
                              onClick={() => Detail(detail)}
                            >
                              ตกลง
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}
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
                      list="list_values"
                      className="block border w-full p-2.5 rounded-lg text-sm border-gray-300 bg-gray-50 text-gray-900"
                    />
                    <datalist
                      id="list_values"
                      onChange={(e) =>
                        setValues({ ...values, payee: e.target.value })
                      }
                    >
                      {payees.map((p, i) => (
                        <option value={p} key={i}>
                          {p}
                        </option>
                      ))}
                    </datalist>
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
                      onClick={handleModalExpense}
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

Edit_Expense.propTypes = {
  edit_Expense: PropTypes.bool,
  handleModalExpense: PropTypes.func,
  income_expense_id: PropTypes.number,
  riceCaltivation_id: PropTypes.number,
};

export default Edit_Expense;
