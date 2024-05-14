const Login2 = () => {
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className="py-8 mx-auto max-w-screen-xl lg:py-16 grid justify-center ">
          <div>
            <div className="w-full lg:max-w-xl md:w-96 py-36 space-y-8 sm:p-8 md:bg-white  rounded-2xl md:shadow-xl dark:bg-gray-800 ">
              <h2 className="text-2xl font-bold text-green-900 dark:text-white text-center">
                ลงชื่อเข้าใช้
              </h2>
              <form className="mt-8 space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm hover:border-gray-400 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    รหัสผ่าน
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 hover:border-gray-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-full sm:w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                >
                  เข้าสู่ระบบ
                </button>
                <div className="text-sm font-medium text-gray-900 dark:text-white flex justify-between">
                  <span>ยังไม่มีบัญชีใช่หรือไม่?</span>
                  <a href="/register" className="text-green-600 hover:underline cursor-pointer">
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login2;
