import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

const ManageRiceCaltivation = () => {
  return (
    <div className="mx-auto flex">
      <div className="hidden lg:block basis-1/6">
        <Sidebar page={"riceCaltivation"} />
      </div>
      <div className="w-full lg:basis-5/6">
        <Navbar />
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
          <div className="flex flex-wrap justify-between items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ManageRiceCaltivation;
