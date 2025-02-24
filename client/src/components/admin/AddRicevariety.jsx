import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import axios from "axios";
import { motion } from "framer-motion";

const AddRicevariety = () => {
  const [modal, setModal] = useState(false);

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [yield_rice, setYield] = useState("");
  const [height, setHeight] = useState("");
  const [photosensitivity, setPhotosensitivity] = useState("");
  const [stability, setStability] = useState("");
  const [precautions, setPrecautions] = useState("");
  const [type, setType] = useState("")

  const [imageURL, setImageURL] = useState("");

  const handleModal = () => {
    setModal(!modal);
    setImageURL("");
  };

  const handleFileUpload = (event) => {
    setImage(event.target.files[0]);
    setImageURL(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("age", age);
    formData.append("yield", yield_rice);
    formData.append("height", height);
    formData.append("photosensitivity", photosensitivity);
    formData.append("stability", stability);
    formData.append("precautions", precautions);
    formData.append("type", type)

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:8080/riceVariety", formData, config)
      .then((response) => {
        console.log(response.data);
      });

    Swal.fire({
      title: "เพิ่มพันธุ์ข้าวสำเร็จ",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  return (
    <div>
      <button
        className="text-white bg-green-600 px-4 py-2 text-sm hover:text-green-700 hover:bg-green-100 hover:duration-200 rounded-lg"
        onClick={handleModal}
      >
        เพิ่มพันธุ์ข้าว
      </button>

      {modal ? (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50 h-screen">
          <div className="relative p-4 w-full max-w-3xl max-h-full">
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white rounded-lg shadow"
            >
              <div className="flex justify-between items-center p-4 md:p-5 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  เพิ่มพันธุ์ข้าว
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={handleModal}
                >
                  <IoMdClose className="w-10 h-10" />
                </button>
              </div>
              <form
                className="p-4 md:p-5 flex flex-col space-y-4"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center ">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-900 mb-2 w-1/3"
                    >
                      ชื่อพันธุ์
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-1/3 md:w-2/4"
                    />
                  </div>
                  <div className="flex items-center text-sm">
                    <label
                      htmlFor="yield"
                      className="font-medium text-gray-900 mb-2 w-1/3"
                    >
                      ผลผลิต
                    </label>
                    <input
                      type="text"
                      name="yield"
                      id="yield"
                      required
                      value={yield_rice}
                      onChange={(e) => setYield(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 mr-2 w-1/3 md:w-2/4"
                    />
                    กก./ไร่
                  </div>
                  <div className="flex items-center text-sm">
                    <label
                      htmlFor="type"
                      className="font-medium text-gray-900 mb-2 w-1/3"
                    >
                      ชนิด
                    </label>
                    <select
                      name="type"
                      id="type"
                      className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 mr-2 w-1/3 md:w-2/4"
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                      required
                    >
                      <option value="">เลือกชนิด</option>
                      <option value="ข้าวเจ้า">ข้าวเจ้า</option>
                      <option value="ข้าวเหนียว">ข้าวเหนียว</option>
                    </select>
                  </div>
                  <div className="flex items-center text-sm ">
                    <label
                      htmlFor="photosensitivity"
                      className="font-medium text-gray-900 mb-2 w-1/3"
                    >
                      ความไวแสง
                    </label>
                    <select
                      name="photosensitivity"
                      id="photosensitivity"
                      className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 mr-2 w-1/3 md:w-2/4"
                      onChange={(e) => setPhotosensitivity(e.target.value)}
                      value={photosensitivity}
                      required
                    >
                      <option value="">เลือกความไวแสง</option>
                      <option value="ไวต่อช่วงแสง">ไวต่อช่วงแสง</option>
                      <option value="ไม่ไวต่อช่วงแสง">ไม่ไวต่อช่วงแสง</option>
                    </select>
                  </div>
                  <div className="flex items-center text-sm">
                    <label
                      htmlFor="age"
                      className=" font-medium text-gray-900 mb-2 w-1/3"
                    >
                      อายุเก็บเกี่ยว
                    </label>
                    <input
                      type="text"
                      name="age"
                      id="age"
                      required
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 mr-2 w-1/3 md:w-2/4"
                    />
                  </div>

                  <div className="flex items-center text-sm">
                    <label
                      htmlFor="height"
                      className="font-medium text-gray-900 mb-2 w-1/3"
                    >
                      ความสูงเฉลี่ย
                    </label>
                    <input
                      type="text"
                      name="height"
                      id="height"
                      required
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mr-2 w-1/3 md:w-2/4"
                    />
                    ซม.
                  </div>
                  <div className="flex text-sm">
                    <label
                      htmlFor="stability"
                      className="font-medium text-gray-900 mb-2 w-1/3"
                    >
                      ลักษณะเด่น
                    </label>
                    <textarea
                      type="text"
                      name="stability"
                      id="stability"
                      required
                      value={stability}
                      onChange={(e) => setStability(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 mr-2 w-1/3 md:w-2/4 h-24"
                    ></textarea>
                  </div>
                  <div className="flex text-sm">
                    <label
                      htmlFor="precautions"
                      className="font-medium text-gray-900 mb-2 w-1/3"
                    >
                      ข้อควรระวัง
                    </label>
                    <textarea
                      type="text"
                      name="precautions"
                      id="precautions"
                      required
                      value={precautions}
                      onChange={(e) => setPrecautions(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 w-1/3 md:w-2/4 h-24"
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <label
                      htmlFor="image"
                      className="text-sm font-medium text-gray-900 mb-2 mr-2 w-1/3"
                    >
                      รูปภาพ
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      required
                      onChange={handleFileUpload}
                      className="text-gray-900 text-sm rounded-lg py-2.5 w-3/4"
                    />
                  </div>
                </div>

                {imageURL !== "" ? (
                  <div className="flex justify-center">
                    <img src={imageURL} alt="" className="w-72 h-48 border" />
                  </div>
                ) : null}

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
            </motion.div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddRicevariety;
