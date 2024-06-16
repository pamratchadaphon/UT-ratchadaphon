import Sidebar from "../../components/admin/Sidebar";
import BoxDashboard from "../../components/admin/BoxDashboard";

const Dashboard = () => {
  return (
    <div className="mx-auto flex">
      <Sidebar page={"dashboard"} />
      <div className="w-full lg:basis-5/6">
        <div className="bg-white h-16 border-b"></div>
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-8 basis-5/6">
          <BoxDashboard/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
