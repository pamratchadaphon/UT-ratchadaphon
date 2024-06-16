import PropTypes from "prop-types";
import seed from "../../images/seed.png";
import rice_consumption from "../../images/rice_consumption.png";
import seed_rice from "../../images/seed_rice.png";

const Stored_Rice = ({ riceCaltivation }) => {
  return (
    <div>
      <div className="md:hidden w-full border bg-white rounded-lg p-4">
        <div className="mb-3">
          <div className="flex space-x-2 items-center">
            <div className="w-5 h-5 text-center">
              <img src={seed} />
            </div>
            <span>ข้าวที่เก็บไว้</span>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-3">
          <div className="flex space-x-2 items-center">
            <div className="w-5 h-5 text-center">
              <img src={rice_consumption} />
            </div>
            <span>ข้าวที่เก็บไว้สำหรับการบริโภค</span>
          </div>
          <span>
            {riceCaltivation.rice_consumption === null
              ? "0"
              : riceCaltivation.rice_consumption}{" "}
            กก.
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2 items-center">
            <div className="w-5 h-5 text-center">
              <img src={seed_rice} />
            </div>
            <span>ข้าวที่เก็บไว้เพื่อใช้เมล็ดพันธุ์</span>
          </div>
          <span>
            {riceCaltivation.seed_rice === null
              ? "0"
              : riceCaltivation.seed_rice}{" "}
            กก.
          </span>
        </div>
      </div>
    </div>
  );
};

Stored_Rice.propTypes = {
  riceCaltivation: PropTypes.object,
};

export default Stored_Rice;
