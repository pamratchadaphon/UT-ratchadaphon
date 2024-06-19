import { useEffect, useState } from "react";
import AddNewService from "../../components/admin/AddNewService";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import Table_NewsService from "../../components/admin/Table_NewsService";
import axios from "axios";

const ManageNewsService = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/newsService");
        setData(res.data);
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  });
  return (
    <div className="mx-auto flex">
      <div className="hidden lg:block basis-1/6">
        <Sidebar page={"newsService"} />
      </div>
      <div className="w-full lg:basis-5/6">
        <Navbar />
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
          {data.length < 4 ? <AddNewService /> : null}
          <Table_NewsService data={data} />
        </div>
      </div>
    </div>
  );
};

export default ManageNewsService;
