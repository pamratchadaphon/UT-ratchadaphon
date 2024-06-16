import Sidebar from "../../components/admin/Sidebar";

const ManageRiceCaltivation = () => {
  return (
    <div className="mx-auto flex">
      <Sidebar page={"riceCaltivation"} />
      <div className="w-full lg:basis-5/6">
        <div className="bg-white h-16 border-b"></div>
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
          <div className="flex flex-wrap justify-between items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ManageRiceCaltivation;
