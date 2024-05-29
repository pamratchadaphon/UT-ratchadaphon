import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2"

const AddRicevariety = () => {
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({
    name: "",
    age: "",
    yield: "",
    height: "",
    photosensitivity: "",
    stability: "",
    precautions: "",
    image: ""
  });

  const handleModal = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', values.image)
    console.log(formData);

    Swal.fire({
      title: "เพิ่มพันธุ์ข้าวสำเร็จ",
      icon: "success"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload()
      }
    });
  }
  return (
    <div>
      <button
        className="text-white bg-green-600 px-4 py-2 text-sm hover:text-green-700 hover:bg-green-100 hover:duration-200 rounded-lg"
        onClick={handleModal}
      >
        เพิ่มพันธุ์ข้าว
      </button>

      {modal ? (
        <div className="fixed top-0 right-0 left-0 flex justify-center items-center bg-black bg-opacity-50 h-screen">
          <div className="relative p-4 w-full max-w-2xl">
            <div className=" bg-white rounded-lg shadow">
              <div className="flex justify-betweenflex items-center justify-between p-4 md:p-5 border-b rounded-">
                <h3 className="text-lg font-semibold text-gray-900">
                  เพิ่มพันธุ์ข้าว
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={handleModal}
                >
                  <IoMdClose className="w-10 h-10" />
                </button>
              </div>
              <form className="p-4 md:p-5 flex flex-col space-y-4 " onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center md:justify-between">
                    <label
                      htmlFor="name"
                      className=" text-sm font-medium text-gray-900 mb-2"
                    >
                      ชื่อพันธุ์
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={values.name}
                      onChange={(e) => setValues({...values, name: e.target.value})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    />
                  </div>
                  <div className="flex items-center md:justify-between">
                    <label
                      htmlFor="age"
                      className=" text-sm font-medium text-gray-900 mb-2"
                    >
                      อายุเก็บเกี่ยว
                    </label>
                    <input
                      type="text"
                      name="age"
                      id="age"
                      required
                      value={values.age}
                      onChange={(e) => setValues({...values, age: e.target.value})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    />
                  </div>
                  <div className="flex items-center md:justify-between">
                    <label
                      htmlFor="yield"
                      className=" text-sm font-medium text-gray-900 mb-2"
                    >
                      ผลผลิต
                    </label>
                    <input
                      type="text"
                      name="yield"
                      id="yield"
                      required
                      value={values.yield}
                      onChange={(e) => setValues({...values, yield: e.target.value})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    />
                  </div>
                  <div className="flex items-center md:justify-between">
                    <label
                      htmlFor="heigth"
                      className=" text-sm font-medium text-gray-900 mb-2"
                    >
                      ความสูงเฉลี่ย
                    </label>
                    <input
                      type="text"
                      name="heigth"
                      id="heigth"
                      required
                      value={values.height}
                      onChange={(e) => setValues({...values, height: e.target.value})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    />
                  </div>
                  <div className="flex items-center md:justify-between">
                    <label
                      htmlFor="photosentitivity"
                      className=" text-sm font-medium text-gray-900 mb-2"
                    >
                      ความไวแสง
                    </label>
                    <input
                      type="text"
                      name="photosentitivity"
                      id="photosentitivity"
                      required
                      value={values.photosensitivity}
                      onChange={(e) => setValues({...values, photosensitivity: e.target.value})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    />
                  </div>
                  <div className="flex items-center md:justify-between">
                    <label
                      htmlFor="stability"
                      className=" text-sm font-medium text-gray-900 mb-2"
                    >
                      ลักษณะเด่น
                    </label>
                    <input
                      type="text"
                      name="stability"
                      id="stability"
                      required
                      value={values.stability}
                      onChange={(e) => setValues({...values, stability:e.target.value})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    />
                  </div>
                  <div className="flex  items-center md:justify-between">
                    <label
                      htmlFor="precautions"
                      className=" text-sm font-medium text-gray-900 mb-2"
                    >
                      ข้อควรระวัง
                    </label>
                    <input
                      type="text"
                      name="precautions"
                      id="precautions"
                      required
                      value={values.precautions}
                      onChange={(e) => setValues({...values, precautions: e.target.value})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                    />
                  </div>
                  <div className="flex items-center md:justify-between">
                    <label
                      htmlFor="image"
                      className=" text-sm font-medium text-gray-900 mb-2"
                    >
                      รูปภาพ
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      required
                      value={values.image}
                      onChange={(e) => setValues({...values, image: e.target.files[0]})}
                      className=" text-gray-900 text-sm rounded-lg p-2.5 "
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
                    className="p-3 bg-slate-50 rounded-md text-sm border hover:bg-gray-100"
                    onClick={handleModal}
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

export default AddRicevariety;
