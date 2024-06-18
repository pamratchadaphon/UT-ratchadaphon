import { FaDroplet } from "react-icons/fa6";
// import { FaTemperatureLow } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaBahtSign } from "react-icons/fa6";
import { LiaTemperatureLowSolid } from "react-icons/lia";

const NewsService = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="hidden md:flex flex-col justify-center items-center sm:flex-row gap-6 p-4">
          <a
            href="http://www.thairicemillers.org/index.php?lay=show&ac=article&Ntype=19"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center gap-2 py-2 px-4 bg-gray-50 shadow  hover:bg-yellow-600 hover:text-white rounded-lg w-full"
          >
            <div className="rounded-full p-4 text-yellow-700 bg-yellow-100 animate-bounce">
              <FaBahtSign />
            </div>
            <span className="text-sm">ราคาข้าว</span>
          </a>
          <a
            href="https://www.thaiwater.net/water?fbclid=IwZXh0bgNhZW0CMTAAAR2vcw1NPqBxPGisIz5Kz28ZBRcPotsMCN-NYooMXT108SE-LLArn2cJ23I_aem_AYItxE46NK2G23TQMGUrpCJPkQU4z0rT02g1QwM1fs5pjgfTlC4QAfGWM2U4F28uYnWNKHX6obFQhGbwhbKGTJI7"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center gap-2 py-2 px-4 bg-gray-50 shadow hover:bg-sky-600 hover:text-white rounded-md w-full"
          >
            <div className="rounded-full p-4 text-sky-700 bg-sky-100 animate-bounce">
              <FaDroplet />
            </div>
            <span className="text-sm">สถานการณ์น้ำ</span>
          </a>
          <a
            href="https://www.ryt9.com/tag/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7?fbclid=IwZXh0bgNhZW0CMTAAAR1lXF7c_fZEl3deJag3AkEvFuEa6Ve3FIoY0NxeZsXld7lYjqrIB5Pon84_aem_AYKeXYzGWE0xgQ7lQYJ13gJF9n7ZoxO_RLFaklexBq6syASl5isz1fjwXhA8CLjnIKD7ZWsvLoGUG1u8d3vsIrbz"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center gap-2 py-2 px-4 bg-gray-50 shadow hover:bg-green-600 hover:text-white rounded-md w-full"
          >
            <div className="rounded-full p-4 text-green-700 bg-green-100 animate-bounce">
              <FaNewspaper />
            </div>
            <span className="text-sm">ข่าวสารข้าว</span>
          </a>
          <a
            href="https://www.thairath.co.th/tags/%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center gap-2 py-2 px-4 bg-gray-50 shadow hover:bg-gray-600 hover:text-white rounded-md w-full"
          >
            <div className="rounded-full p-4 text-gray-700 bg-gray-100 animate-bounce">
              <LiaTemperatureLowSolid />
            </div>
            <span className="text-sm">พยากรณ์อากาศ</span>
          </a>
        </div>

        <div className="md:hidden flex justify-center gap-1 bg-white">
          <a
            href="http://www.thairicemillers.org/index.php?lay=show&ac=article&Ntype=19"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center w-full"
          >
            <div className="rounded-full p-4 text-yellow-700 bg-yellow-100 animate-bounce">
              <FaBahtSign />
            </div>
            <span className="text-xs">ราคาข้าว</span>
          </a>
          <a
            href="https://www.thaiwater.net/water?fbclid=IwZXh0bgNhZW0CMTAAAR2vcw1NPqBxPGisIz5Kz28ZBRcPotsMCN-NYooMXT108SE-LLArn2cJ23I_aem_AYItxE46NK2G23TQMGUrpCJPkQU4z0rT02g1QwM1fs5pjgfTlC4QAfGWM2U4F28uYnWNKHX6obFQhGbwhbKGTJI7"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center w-full"
          >
            <div className="rounded-full p-4 text-sky-700 bg-sky-100 animate-bounce">
              <FaDroplet />
            </div>
            <span className="text-xs">สถานการณ์น้ำ</span>
          </a>
          <a
            href="https://www.ryt9.com/tag/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7?fbclid=IwZXh0bgNhZW0CMTAAAR1lXF7c_fZEl3deJag3AkEvFuEa6Ve3FIoY0NxeZsXld7lYjqrIB5Pon84_aem_AYKeXYzGWE0xgQ7lQYJ13gJF9n7ZoxO_RLFaklexBq6syASl5isz1fjwXhA8CLjnIKD7ZWsvLoGUG1u8d3vsIrbz"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center w-full"
          >
            <div className="rounded-full p-4 text-green-700 bg-green-100 animate-bounce">
              <FaNewspaper />
            </div>
            <span className="text-xs">ข่าวสารข้าว</span>
          </a>
          <a
            href="https://www.thairath.co.th/tags/%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center p-2 w-full mr-2"
          >
            <div className="rounded-full p-4 text-gray-700 bg-gray-100 animate-bounce">
              <LiaTemperatureLowSolid />
            </div>
            <span className="text-xs">พยากรณ์อากาศ</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsService;
