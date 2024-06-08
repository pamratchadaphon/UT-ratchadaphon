import PropTypes from 'prop-types'

const Yield_rice = ({ riceCaltivation }) => {
  return (
    <div className="bg-white p-4 border rounded-lg w-full md:w-1/2">
      <div className="rounded-lg text-gray-900">
        <div className="mb-3">
          <span>ผลผลิต</span>
        </div>
        <hr />
        <div className="flex justify-between mt-3">
          <span>น้ำหนักสุทธิ </span>
          <span>
            {riceCaltivation.yield === "0" ? 0 : riceCaltivation.yield} กก.
          </span>
        </div>
        <div className="flex justify-between pb-3">
          <span>ราคา/กก.</span>
          <span>
            {riceCaltivation.rice_price_per_kg === 0
              ? 0
              : riceCaltivation.rice_price_per_kg}{" "}
            บาท
          </span>
        </div>
        <div className="flex justify-between border-t  py-2">
          <span>จำนวนเงิน </span>
          <span>{riceCaltivation.yield * riceCaltivation.rice_price_per_kg} บาท</span>
        </div>
      </div>
    </div>
  );
};

Yield_rice.propTypes = {
  riceCaltivation: PropTypes.object
}

export default Yield_rice;
