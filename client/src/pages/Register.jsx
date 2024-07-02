import axios from "axios";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import Swal from "sweetalert2";

const Register = () => {
  const navigator = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
    phone: "",
    subdistrict: "",
    district: "",
    province: "",
  });

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [fname, setFname] = useState(false);
  const [lname, setLname] = useState(false);
  const [phone, setPhone] = useState(false);
  const [subdistrict, setSubdistrict] = useState(false);
  const [district, setDistrict] = useState(false);
  const [province, setProvince] = useState(false);

  const check = () => {
    values.email === "" ? setEmail(true) : null;
    values.password === "" ? setPassword(true) : null;
    values.fname === "" ? setFname(true) : null;
    values.lname === "" ? setLname(true) : null;
    values.phone === "" ? setPhone(true) : null;
    values.subdistrict === "" ? setSubdistrict(true) : null;
    values.district === "" ? setDistrict(true) : null;
    values.province === "" ? setProvince(true) : null;
  };

  useEffect(() => setEmail(false), [values.email]);
  useEffect(() => setPassword(false), [values.password]);
  useEffect(() => setFname(false), [values.fname]);
  useEffect(() => setLname(false), [values.lname]);
  useEffect(() => setPhone(false), [values.phone]);
  useEffect(() => setSubdistrict(false), [values.subdistrict]);
  useEffect(() => setDistrict(false), [values.district]);
  useEffect(() => setProvince(false), [values.province]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    check();
    if (
      values.email !== "" &&
      values.password !== "" &&
      values.fname !== "" &&
      values.lname !== "" &&
      values.phone !== "" &&
      values.subdistrict !== "" &&
      values.district !== "" &&
      values.province !== ""
    ) {
      try {
        await axios
          .post("http://localhost:8080/farmer/", values)
          .then((result) => console.log(result.data));
        await Swal.fire({
          title: "ลงทะเบียนสำเร็จ",
          icon: "success",
        });
        navigator("/");
      } catch (error) {
        console.log("Error : " + error);
        if (error.response.data.error === "Email already exists") {
          Swal.fire({
            title: "อีเมลนี้ถูกใช้แล้ว",
            text: "กรุณาใช้อีเมลใหม่ในการสร้างบัญชี",
            icon: "error",
          });
        }
      }
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-green-50 to-sky-50">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full h-1/3 flex items-center justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-500 md:text-5xl lg:text-6xl">
            <ReactTyped
              strings={[
                "จดบันทึกการปลูกข้าว",
                "ตรวจสอบผลผลิต",
                "เลือกพันธุ์ข้าว",
              ]}
              typeSpeed={100}
              loop
              backSpeed={50}
              showCursor={false}
            />
          </h1>
        </div>
        <div className="w-full flex justify-center items-center bg-white h-screen">
          <div className="flex flex-col p-6 md:p-4 w-screen md:w-2/3 h-96 justify-center">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
              สร้างบัญชี
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 hover:border-green-700 hover:border-2"
                  />
                  {email ? (
                    <div className="text-sm text-red-500 flex items-center gap-1">
                      <RiErrorWarningLine />
                      <span>กรุณากรอกอีเมล</span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                    รหัสผ่าน
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-green-700 hover:border-2 w-full p-2.5"
                  />
                  {password ? (
                    <div className="text-sm text-red-500 flex items-center gap-1">
                      <RiErrorWarningLine />
                      <span>กรุณากรอกรหัสผ่าน</span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={values.fname}
                    onChange={(e) =>
                      setValues({ ...values, fname: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-green-700 hover:border-2 w-full p-2.5"
                  />
                  {fname ? (
                    <div className="text-sm text-red-500 flex items-center gap-1">
                      <RiErrorWarningLine />
                      <span>กรุณากรอกชื่อ</span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={values.lname}
                    onChange={(e) =>
                      setValues({ ...values, lname: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-green-700 hover:border-2 w-full p-2.5"
                  />
                  {lname ? (
                    <div className="text-sm text-red-500 flex items-center gap-1">
                      <RiErrorWarningLine />
                      <span> กรุณากรอกนามสกุล</span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={(e) =>
                      setValues({ ...values, phone: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-green-700 hover:border-2 w-full p-2.5"
                  />
                  {phone ? (
                    <div className="text-sm text-red-500 flex items-center gap-1">
                      <RiErrorWarningLine />
                      <span>กรุณากรอกเบอร์โทรศัพท์</span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                    ตำบล
                  </label>
                  <input
                    type="text"
                    name="subdistrict"
                    id="subdistrict"
                    value={values.subdistrict}
                    onChange={(e) =>
                      setValues({ ...values, subdistrict: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-green-700 hover:border-2 w-full p-2.5"
                  />
                  {subdistrict ? (
                    <div className="text-sm text-red-500 flex items-center gap-1">
                      <RiErrorWarningLine />
                      <span>กรุณากรอกตำบล</span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                    อำเภอ
                  </label>
                  <input
                    type="text"
                    name="district"
                    id="district"
                    value={values.district}
                    onChange={(e) =>
                      setValues({ ...values, district: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-green-700 hover:border-2 w-full p-2.5"
                  />
                  {district ? (
                    <div className="text-sm text-red-500 flex items-center gap-1">
                      <RiErrorWarningLine />
                      <span>กรุณากรอกอำเภอ</span>
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                    จังหวัด
                  </label>
                  <select
                    type="text"
                    name="province"
                    id="province"
                    value={values.province}
                    onChange={(e) =>
                      setValues({ ...values, province: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-green-700 hover:border-2 w-full p-2.5"
                  >
                    {" "}
                    <option value="">เลือกจังหวัด</option>
                    <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                    <option value="กระบี่">กระบี่</option>
                    <option value="กาญจนบุรี">กาญจนบุรี</option>
                    <option value="กาฬสินธุ์">กาฬสินธุ์</option>
                    <option value="กำแพงเพชร">กำแพงเพชร</option>
                    <option value="ขอนแก่น">ขอนแก่น</option>
                    <option value="จันทบุรี">จันทบุรี</option>
                    <option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option>
                    <option value="ชลบุรี">ชลบุรี</option>
                    <option value="ชัยนาท">ชัยนาท</option>
                    <option value="ชัยภูมิ">ชัยภูมิ</option>
                    <option value="ชุมพร">ชุมพร</option>
                    <option value="เชียงราย">เชียงราย</option>
                    <option value="เชียงใหม่">เชียงใหม่</option>
                    <option value="ตรัง">ตรัง</option>
                    <option value="ตราด">ตราด</option>
                    <option value="ตาก">ตาก</option>
                    <option value="นครนายก">นครนายก</option>
                    <option value="นครปฐม">นครปฐม</option>
                    <option value="นครพนม">นครพนม</option>
                    <option value="นครราชสีมา">นครราชสีมา</option>
                    <option value="นครศรีธรรมราช">นครศรีธรรมราช</option>
                    <option value="นครสวรรค์">นครสวรรค์</option>
                    <option value="นนทบุรี">นนทบุรี</option>
                    <option value="นราธิวาส">นราธิวาส</option>
                    <option value="น่าน">น่าน</option>
                    <option value="บึงกาฬ">บึงกาฬ</option>
                    <option value="บุรีรัมย์">บุรีรัมย์</option>
                    <option value="ปทุมธานี">ปทุมธานี</option>
                    <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option>
                    <option value="ปราจีนบุรี">ปราจีนบุรี</option>
                    <option value="ปัตตานี">ปัตตานี</option>
                    <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option>
                    <option value="พังงา">พังงา</option>
                    <option value="พัทลุง">พัทลุง</option>
                    <option value="พิจิตร">พิจิตร</option>
                    <option value="พิษณุโลก">พิษณุโลก</option>
                    <option value="เพชรบุรี">เพชรบุรี</option>
                    <option value="เพชรบูรณ์">เพชรบูรณ์</option>
                    <option value="แพร่">แพร่</option>
                    <option value="พะเยา">พะเยา</option>
                    <option value="ภูเก็ต">ภูเก็ต</option>
                    <option value="มหาสารคาม">มหาสารคาม</option>
                    <option value="มุกดาหาร">มุกดาหาร</option>
                    <option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option>
                    <option value="ยโสธร">ยโสธร</option>
                    <option value="ยะลา">ยะลา</option>
                    <option value="ร้อยเอ็ด">ร้อยเอ็ด</option>
                    <option value="ระนอง">ระนอง</option>
                    <option value="ระยอง">ระยอง</option>
                    <option value="ราชบุรี">ราชบุรี</option>
                    <option value="ลพบุรี">ลพบุรี</option>
                    <option value="ลำปาง">ลำปาง</option>
                    <option value="ลำพูน">ลำพูน</option>
                    <option value="เลย">เลย</option>
                    <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                    <option value="สกลนคร">สกลนคร</option>
                    <option value="สงขลา">สงขลา</option>
                    <option value="สตูล">สตูล</option>
                    <option value="สมุทรปราการ">สมุทรปราการ</option>
                    <option value="สมุทรสงคราม">สมุทรสงคราม</option>
                    <option value="สมุทรสาคร">สมุทรสาคร</option>
                    <option value="สระแก้ว">สระแก้ว</option>
                    <option value="สระบุรี">สระบุรี</option>
                    <option value="สิงห์บุรี">สิงห์บุรี</option>
                    <option value="สุโขทัย">สุโขทัย</option>
                    <option value="สุพรรณบุรี">สุพรรณบุรี</option>
                    <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
                    <option value="สุรินทร์">สุรินทร์</option>
                    <option value="หนองคาย">หนองคาย</option>
                    <option value="หนองบัวลำภู">หนองบัวลำภู</option>
                    <option value="อ่างทอง">อ่างทอง</option>
                    <option value="อุดรธานี">อุดรธานี</option>
                    <option value="อุทัยธานี">อุทัยธานี</option>
                    <option value="อุตรดิตถ์">อุตรดิตถ์</option>
                    <option value="อุบลราชธานี">อุบลราชธานี</option>
                    <option value="อำนาจเจริญ">อำนาจเจริญ</option>
                  </select>
                  {province ? (
                    <div className="text-sm text-red-500 flex items-center gap-1">
                      <RiErrorWarningLine />
                      <span>กรุณากรอกจังหวัด</span>
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                type="submit"
                className="w-full md:w-full px-5 py-2.5 text-base font-medium text-center text-white bg-green-600 hover:bg-green-100 hover:text-green-700 hover:duration-500 rounded-full flex items-center justify-center gap-2 shadow mt-4"
              >
                <span>สร้างบัญชี</span>
                <GoArrowRight />
              </button>
            </form>
            <div className="flex justify-end items-center pt-4">
              <div className="text-sm font-medium text-gray-900 flex space-x-2">
                <div>หากมีบัญชีอยู่แล้ว</div>
                <a
                  href="/"
                  className="text-blue-600 hover:underline cursor:pointer animate-bounce"
                >
                  ลงชื่อเข้าใช้
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
