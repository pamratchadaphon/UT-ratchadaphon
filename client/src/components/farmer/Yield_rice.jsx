import PropTypes from "prop-types";
import price from "../../images/price.png";
import weight from "../../images/weight.png";
import money from "../../images/money.png";
import sack_rice from "../../images/sack_rice.png";

const Yield_rice = ({ riceCaltivation }) => {
  return (
    <div>
      <div className="md:hidden bg-white p-4 border rounded-lg w-full">
        <div className="mb-3">
          <div className="flex space-x-2 items-center">
            <div className="w-5 h-5 text-center">
              <img src={sack_rice} />
            </div>
            <span>ผลผลิต</span>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-3">
          <div className="flex space-x-2 items-center">
            <div className="w-5 h-5 text-center">
              <img src={weight} />
            </div>
            <span>น้ำหนักสุทธิ </span>
          </div>
          <span>
            {riceCaltivation.yield === "0" ? 0 : riceCaltivation.yield} กก.
          </span>
        </div>
        <div className="flex justify-between pb-3">
          <div className="flex space-x-2 items-center">
            <div className="w-5 h-5 text-center">
              <img src={price} alt="" />
            </div>
            <span>ราคา/กก.</span>
          </div>
          <span>
            {riceCaltivation.rice_price_per_kg === 0
              ? 0
              : riceCaltivation.rice_price_per_kg}{" "}
            บาท
          </span>
        </div>
        <div className="flex justify-between border-t pt-2">
          <div className="flex space-x-2 items-center">
            <div className="w-5 h-5 text-center">
              <img src={money} />
            </div>
            <span>จำนวนเงิน </span>
          </div>
          <span>
            {riceCaltivation.yield * riceCaltivation.rice_price_per_kg} บาท
          </span>
        </div>
      </div>
    </div>
  );
};

Yield_rice.propTypes = {
  riceCaltivation: PropTypes.object,
};

export default Yield_rice;
