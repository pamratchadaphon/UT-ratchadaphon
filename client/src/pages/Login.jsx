import axios from "axios";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
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
      const id = response.data.farmer_id
      if (response.data.role === "admin") {
        localStorage.setItem("token", response.data.token);
        navigator(`/admin/index/`);
      } else {
        localStorage.setItem("token", response.data.token);
        navigator(`/farmer/home/${id}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-b from-green-300 to-green-50 bg-opacity-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex justify-between">
        <div className="hidden lg:flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-yellow-600 md:text-5xl lg:text-6xl">
            บันทึกรายรับรายจ่าย
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div>
          <div className="w-full md:w-96 space-y-8 sm:p-8 md:bg-white md:rounded-lg md:shadow-xl">
            <h2 className="text-2xl font-bold text-green-700 text-center lg:text-start">
              ลงชื่อเข้าใช้
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  อีเมล
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-green-700 hover:border-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-green-700 hover:border-2 w-full p-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-full px-5 py-3 text-base font-medium text-center text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-150 ease-in-out hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>เข้าใช้งาน</span>
                <GoArrowRight />
              </button>
              <div className="text-sm font-medium text-gray-900 flex justify-between">
                <div>ยังไม่มีบัญชี? </div>
                <a
                  href="/register"
                  className="text-blue-600 hover:underline cursor:pointer animate-bounce"
                >
                  สร้างบัญชี
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
