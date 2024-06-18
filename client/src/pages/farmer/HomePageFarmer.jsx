import Navbar from "../../components/farmer/Navbar";
import NewsService from "../../components/farmer/NewsService";
import Content from "../../components/farmer/Content";
import { useParams } from "react-router-dom";

const HomePageFarmer = () => {
  const farmer_id = Number(useParams().farmer_id)

  return (
    <div className="h-screen flex flex-col justify-between bg-gradient-to-r from-green-100 to-blue-100">
      <Navbar id={farmer_id} page={'home'}/>
      <Content />
      <NewsService/>
    </div>
  );
};

export default HomePageFarmer;
