import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

const SelectMonth = ({ riceCaltivation, handleMonth }) => {
  const startMonth = new Date(riceCaltivation.startDate).getMonth() + 1;
  const endMonth = new Date(riceCaltivation.endDate).getMonth() + 1;

  const [month, setMonth] = useState("");

  const monthArr = [];
  const monthString = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  for (let i = startMonth - 1; i < endMonth; i++) {
    for (let j = 0; j < monthString.length; j++) {
      if (i === j) {
        monthArr[i + 1] = monthString[j];
      }
    }
  }

  useEffect(() => {
    handleMonth(month)
  }, [month, handleMonth])

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">เดือน</option>
          {monthArr.map((month, index) => (
            <option value={index} key={index}>
              {month}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

SelectMonth.propTypes = {
    riceCaltivation: PropTypes.object,
    handleMonth: PropTypes.func
}

export default SelectMonth;
