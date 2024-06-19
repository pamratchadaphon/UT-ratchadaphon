import PropTypes from "prop-types";
import { FaRegEdit } from "react-icons/fa";
import rice_consumption from "../../images/rice_consumption.png";
import seed_rice from "../../images/seed_rice.png";

const Stored_Rice = ({ riceCaltivation }) => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col rounded-2xl p-4 md:px-10 md:py-16 bg-gradient-to-b from-blue-200 to-sky-200 text-gray-700 shadow-xl border border-blue-300">
      <div className="border-b-2 pb-2 mb-4 md:pb-8 md:mb-8 border-blue-400">
        <div className="flex gap-2 justify-between items-center">
          <div>
            <span className="pb-4 text-xl text-gray-800">ข้าวที่เก็บไว้</span>
          </div>
          <button type="button" className="p-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500">
            <FaRegEdit/>
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <div className=" w-5 h-5 text-center">
          <img src={rice_consumption} />
        </div>
        <span>
          ข้าวที่เก็บไว้บริโภค : {riceCaltivation.rice_consumption} กิโลกรัม
        </span>
      </div>
      <div className="flex gap-2">
        <div className=" w-5 h-5 text-center">
          <img src={seed_rice} />
        </div>
        <span>
          ข้าวที่เก็บไว้ทำเมล็ดพันธุ์ : {riceCaltivation.seed_rice} กิโลกรัม
        </span>
      </div>
    </div>
    // <div className="md:hidden w-full border bg-white rounded-lg p-4">
    //   <div className="mb-3">
    //     <div className="flex space-x-2 items-center">
    //       <div className="w-5 h-5 text-center">
    //         <img src={seed} />
    //       </div>
    //       <span>ข้าวที่เก็บไว้</span>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="flex justify-between mt-3">
    //     <div className="flex space-x-2 items-center">
    //       <div className="w-5 h-5 text-center">
    //         <img src={rice_consumption} />
    //       </div>
    //       <span>ข้าวที่เก็บไว้สำหรับการบริโภค</span>
    //     </div>
    //     <span>
    //       {riceCaltivation.rice_consumption === null
    //         ? "0"
    //         : riceCaltivation.rice_consumption}{" "}
    //       กก.
    //     </span>
    //   </div>
    //   <div className="flex justify-between">
    //     <div className="flex space-x-2 items-center">
    //       <div className="w-5 h-5 text-center">
    //         <img src={seed_rice} />
    //       </div>
    //       <span>ข้าวที่เก็บไว้เพื่อใช้เมล็ดพันธุ์</span>
    //     </div>
    //     <span>
    //       {riceCaltivation.seed_rice === null
    //         ? "0"
    //         : riceCaltivation.seed_rice}{" "}
    //       กก.
    //     </span>
    //   </div>
    // </div>
  );
};

Stored_Rice.propTypes = {
  riceCaltivation: PropTypes.object,
};

export default Stored_Rice;
