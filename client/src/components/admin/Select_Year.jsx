import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Select_Year = ({ setYear }) => {
  const [yearData, setYearData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/incomeExpense");
        const data = res.data.filter(
          (data) =>
            data.type === "รายรับ" &&
            data.riceCaltivation_id !== null &&
            data.farmer_id !== null
        );
        setYearData([
            ...new Set(data.map((data) => new Date(data.date).getFullYear())),
          ].sort((a, b) => a - b))
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <select
        name="year"
        id="year"
        className="border border-gray-300 rounded-lg p-2 text-sm bg-gray-50 text-gray-500"
        onChange={(e) => setYear(e.target.value)}
      >
        <option value={new Date().getFullYear()}>ปี</option>
        {yearData.map((year, index) => (
          <option value={year} key={index}>{year}</option>
        ))}
      </select>
    </div>
  );
};

Select_Year.propTypes = {
  setYear: PropTypes.func,
};

export default Select_Year;
