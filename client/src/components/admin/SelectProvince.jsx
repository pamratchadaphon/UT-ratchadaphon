import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const SelectProvince = ({ setProvince }) => {
  const [province_res, setProvince_res] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/incomeExpense");
        const data = res.data.filter(
          (data) =>
            data.type === "รายรับ" &&
            data.farmer !== null &&
            data.riceCaltivation !== null
        );
        const province = [...new Set(data.map((data) => data.farmer.province))];
        province.sort((a, b) => (a > b ? 1 : -1));
        setProvince_res(province);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <select
        name="province"
        id="province"
        className="border border-gray-300 rounded-lg p-2 text-sm bg-gray-50 text-gray-500"
        onChange={(e) => setProvince(e.target.value)}
      >
        <option value="">จังหวัด</option>
        {province_res.map((province, index) => (
          <option value={province} key={index}>
            {province}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectProvince.propTypes = {
  setProvince: PropTypes.func,
};

export default SelectProvince;
