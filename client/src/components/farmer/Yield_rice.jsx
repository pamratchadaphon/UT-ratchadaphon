import PropTypes from "prop-types";
import { FaRegEdit } from "react-icons/fa";
import price from "../../images/price.png";
import weight from "../../images/weight.png";
import money from "../../images/money.png";
import sack_rice from "../../images/sack_rice.png";

const Yield_rice = ({ riceCaltivation }) => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col rounded-2xl p-4 md:px-10 md:py-16  bg-gradient-to-b from-rose-200 to-pink-200 text-gray-700 shadow-xl border border-pink-300">
      <div className="border-b-2 pb-2 mb-4 md:pb-8 md:mb-8 border-pink-400">
        <div className="flex gap-2 justify-between items-center">
          <div>
            <span className="pb-4 text-xl text-gray-800">ผลผลิตจากการเก็บเกี่ยว</span>
          </div>
          <button type="button" className="p-2 rounded-lg bg-pink-400 text-white hover:bg-pink-500">
            <FaRegEdit/>
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <div className=" w-5 h-5 text-center">
          <img src={sack_rice} />
        </div>
        <span>ปริมาณข้าวที่ได้ : {riceCaltivation.total_yield} (กิโลกรัม)</span>
      </div>
      <div className="flex gap-2">
        <div className=" w-5 h-5 text-center">
          <img src={weight} />
        </div>
        <span>น้ำหนักสุทธิ : {riceCaltivation.yield} กิโลกรัม</span>
      </div>
      <div className="flex gap-2">
        <div className=" w-5 h-5 text-center">
          <img src={price} />
        </div>
        <span>
          ราคข้าวต่อกิโลกรัม : {riceCaltivation.rice_price_per_kg} บาท
        </span>
      </div>
      <div className="flex gap-2">
        <div className=" w-5 h-5 text-center">
          <img src={money} />
        </div>
        <span>
          รายได้จากการขายข้าว :{" "}
          {riceCaltivation.yield * riceCaltivation.rice_price_per_kg} บาท
        </span>
      </div>
    </div>

    // <div className="md:hidden bg-white p-4 border rounded-lg w-full">
    //   <div className="mb-3">
    //     <div className="flex space-x-2 items-center">
    //       <div className="w-5 h-5 text-center">
    //         <img src={sack_rice} />
    //       </div>
    //       <span>ผลผลิต</span>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="flex justify-between mt-3">
    //     <div className="flex space-x-2 items-center">
    //       <div className="w-5 h-5 text-center">
    //         <img src={weight} />
    //       </div>
    //       <span>น้ำหนักสุทธิ </span>
    //     </div>
    //     <span>
    //       {riceCaltivation.yield === "0" ? 0 : riceCaltivation.yield} กก.
    //     </span>
    //   </div>
    //   <div className="flex justify-between pb-3">
    //     <div className="flex space-x-2 items-center">
    //       <div className="w-5 h-5 text-center">
    //         <img src={price} alt="" />
    //       </div>
    //       <span>ราคา/กก.</span>
    //     </div>
    //     <span>
    //       {riceCaltivation.rice_price_per_kg === 0
    //         ? 0
    //         : riceCaltivation.rice_price_per_kg}{" "}
    //       บาท
    //     </span>
    //   </div>
    //   <div className="flex justify-between border-t pt-2">
    //     <div className="flex space-x-2 items-center">
    //       <div className="w-5 h-5 text-center">
    //         <img src={money} />
    //       </div>
    //       <span>จำนวนเงิน </span>
    //     </div>
    //     <span>
    //       {riceCaltivation.yield * riceCaltivation.rice_price_per_kg} บาท
    //     </span>
    //   </div>
    // </div>
  );
};

Yield_rice.propTypes = {
  riceCaltivation: PropTypes.object,
};

export default Yield_rice;
