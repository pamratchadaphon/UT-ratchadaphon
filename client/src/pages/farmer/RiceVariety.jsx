import Cards from "../../components/farmer/Cards";
import Navbar from "../../components/farmer/Navbar";

const RiceVariety = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl h-screen flex flex-col gap-4 items-center">
        <span className="mt-4 text-2xl">พันธุ์ข้าว</span>
        <hr className="w-20"/>
        <Cards/>
      </div>
    </div>
  );
};

export default RiceVariety;
