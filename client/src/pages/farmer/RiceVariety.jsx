import Cards from "../../components/farmer/Cards";
import Navbar from "../../components/farmer/Navbar";

const RiceVariety = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl h-screen flex flex-col items-center">
        <div className="flex items-center gap-4 m-8">
          <div className="flex flex-col gap-2 items-end">
            <div className="w-10 border-2 rounded-full border-green-600"></div>
            <div className="w-16 border-2 rounded-full border-green-600"></div>
          </div>
          <span className="text-xl">
            พันธุ์ข้าว
          </span>
          <div className="flex flex-col gap-2 items-start">
            <div className="w-10 border-2 rounded-full border-green-600"></div>
            <div className="w-16 border-2 rounded-full border-green-600"></div>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default RiceVariety;
