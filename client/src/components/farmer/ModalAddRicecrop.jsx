import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

const ModalAddRicecrop = () => {
  const {farmer_id} = useParams()
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [values, setValues] = useState({
    year: "",
    startDate: new Date().toISOString().split("T")[0],
    endDate: "",
    riceVariety: "",
    area: "",
    yield: 0,
    rice_price_per_kg: 0,
    farmer_id: farmer_id 
  });

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    await axios.post("http://localhost:8080/riceCaltivation", values)
    Swal.fire({
      title: "เพิ่มรอบการปลูกสำเร็จ",
      icon: "success",
    }).then((result) => {
      result ? window.location.reload() : null;
    });
  };
  return (
    <div>
      <button
        className="block text-white bg-green-600 hover:bg-green-100 hover:text-green-700 hover:border-green-700 duration-200 font-medium rounded-lg text-sm px-4 py-2 text-cente lg:mx-0 w-full"
        onClick={handleModal}
      >
        เพิ่มรอบการปลูก
      </button>

      {isOpenModal ? (
        <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-black bg-opacity-50 flex">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  เพิ่มรอบการปลูก
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ms-auto inline-flex justify-center items-center w-8 h-8"
                  onClick={handleModal}
                >
                  <IoMdClose className="w-10 h-10" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      ปี
                    </label>
                    <input
                      type="number"
                      name="year"
                      id="year"
                      value={values.year}
                      onChange={(e) =>
                        setValues({ ...values, year: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      วันที่ปลูก
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      value={values.startDate}
                      onChange={(e) =>
                        setValues({ ...values, startDate: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      วันที่เก็บเกี่ยว
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      value={values.endDate}
                      onChange={(e) =>
                        setValues({ ...values, endDate: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      พันธุ์ข้าว
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.riceVariety}
                      onChange={(e) =>
                        setValues({ ...values, riceVariety: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      พื้นที่ (ไร่)
                    </label>
                    <input
                      type="number"
                      name="area"
                      id="area"
                      value={values.area}
                      onChange={(e) =>
                        setValues({ ...values, area: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
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
      ) : null}
    </div>
  );
};

export default ModalAddRicecrop;
