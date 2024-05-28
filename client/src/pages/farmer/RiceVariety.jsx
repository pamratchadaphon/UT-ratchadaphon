import Cards from "../../components/farmer/Cards";
import Navbar from "../../components/farmer/Navbar";

const RiceVariety = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl h-screen flex flex-col items-center">
        <div className="flex items-center gap-4 m-8">
          <div className="flex flex-col gap-2 items-end">
            <hr className="w-10 border-2 rounded-full border-green-600"/>
            <hr className="w-16 border-2 rounded-full border-green-600"/>
          </div>
          <span className="text-xl text-green-700">
            พันธุ์ข้าว
          </span>
          <div className="flex flex-col gap-2 items-start">
            <hr className="w-10 border-2 rounded-full border-green-600"/>
            <hr className="w-16 border-2 rounded-full border-green-600"/>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default RiceVariety;
