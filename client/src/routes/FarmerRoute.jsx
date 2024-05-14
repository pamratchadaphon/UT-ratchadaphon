import Navbar from "../components/farmer/Navbar";

const FarmerRoute = ({ children }) => {
  return (
    <div className="flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-20 py-5">{children}</div>
    </div>
  );
};

export default FarmerRoute;
