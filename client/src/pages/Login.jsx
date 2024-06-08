import axios from "axios";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ReactTyped } from "react-typed";

const Login = () => {
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/farmer/login",
        value
      );
      const id = response.data.farmer_id;
      if (response.data.role === "admin") {
        localStorage.setItem("token", response.data.token);
        navigator(`/admin/riceVariety`);
      } else {
        localStorage.setItem("token", response.data.token);
        navigator(`/farmer/home/${id}`);
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "อีเมล หรือ รหัสผ่านไม่ถูกต้อง",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-green-50 to-sky-50">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full h-1/3 flex items-center justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-500 md:text-5xl lg:text-6xl">
            <ReactTyped
              strings={["จดบันทึกการปลูกข้าว", "ตรวจสอบผลผลิต", "เลือกพันธุ์ข้าว"]}
              typeSpeed={100}
              loop
              backSpeed={50}
              showCursor={false}
            />
          </h1>
        </div>
        <div className="w-full flex justify-center items-center bg-white h-screen">
          <div className="flex flex-col p-4 w-2/3 h-96 justify-center">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              ลงชื่อเข้าใช้
            </h3>
            <form
              className="space-y-10 flex flex-col justify-start"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                  อีเมล
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 hover:border-green-700 hover:border-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-green-700 hover:border-2 w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-full px-5 py-2.5 text-base font-medium text-center text-white bg-green-600 hover:bg-green-100 hover:text-green-700 hover:duration-500 rounded-full flex items-center justify-center gap-2 shadow"
              >
                <span>เข้าใช้งาน</span>
                <GoArrowRight />
              </button>
            </form>
            <div className="flex justify-end items-center pt-4">
              <div className="text-sm font-medium text-gray-900 flex space-x-2">
                <div>ยังไม่มีบัญชี? </div>
                <a
                  href="/register"
                  className="text-blue-600 hover:underline cursor:pointer animate-bounce"
                >
                  สร้างบัญชี
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
