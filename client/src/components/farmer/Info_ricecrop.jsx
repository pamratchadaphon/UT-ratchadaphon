import PropTypes from "prop-types";
import year from "../../images/year.png";
import rice from "../../images/rice.png";
import area from "../../images/map.png";
import strtDate from "../../images/calendar.png";
import endDate from "../../images/date.png";

const Info_ricecrop = ({ riceCaltivation }) => {
  const formatDate = (string) => {
    const date = new Date(string);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  };

  return (
    <div>
      <div className="md:hidden flex gap-4 w-full">
        <div className="bg-white rounded-lg border p-4 space-y-2 flex w-full">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between rounded-lg items-center">
              <div className="flex space-x-2 items-center">
                <div className=" w-5 h-5 text-center">
                  <img src={year} />
                </div>
                <span>ปีที่ทำการปลูก</span>
              </div>
              <span>{riceCaltivation.year}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center rounded-lg">
              <div className="flex space-x-2 items-center">
                <div className="w-5 h-5 text-center">
                  <img src={rice} />
                </div>
                <span>พันธุ์ข้าว</span>
              </div>
              <span>{riceCaltivation.riceVariety}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center rounded-lg">
              <div className="flex space-x-2 items-center">
                <div className="w-5 h-5 text-center">
                  <img src={area} />
                </div>
                <span>พื้นที่</span>
              </div>
              <span>{riceCaltivation.area} ไร่</span>
            </div>
            <hr />
            <div className="flex justify-between items-center rounded-lg">
              <div className="flex space-x-2 items-center">
                <div className=" w-5 h-5 text-center">
                  <img src={strtDate} />
                </div>
                <span>วันที่ปลูก</span>
              </div>
              <span>{formatDate(riceCaltivation.startDate)}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center rounded-lg">
              <div className="flex space-x-2 items-center">
                <div className="w-5 h-5 text-center">
                  <img src={endDate} />
                </div>
                <span>วันที่เก็บเกี่ยว</span>
              </div>
              <span>{formatDate(riceCaltivation.endDate)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Info_ricecrop.propTypes = {
  riceCaltivation: PropTypes.object,
};

export default Info_ricecrop;
