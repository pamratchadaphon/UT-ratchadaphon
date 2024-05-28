import AddRicevariety from "../../components/admin/AddRicevariety";
import Navbar from "../../components/admin/Navbar";
import Pagination from "../../components/admin/Pagination";
import Search_RiceVariety from "../../components/admin/Search_RiceVariety";
import Table_RiceVariety from "../../components/admin/Table_RiceVariety";

const ManageRiceVariety = () => {
  return (
    <div>
      <Navbar />
      <div className=" max-w-screen-xl mx-auto">
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <AddRicevariety/>
            <Search_RiceVariety/>
          </div>
          <Table_RiceVariety />
          <Pagination/>
        </div>
      </div>
    </div>
  );
};

export default ManageRiceVariety;
