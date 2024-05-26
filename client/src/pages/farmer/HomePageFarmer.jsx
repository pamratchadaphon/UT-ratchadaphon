import Navbar from "../../components/farmer/Navbar";
import NewsService from "../../components/farmer/NewsService";
import Content from "../../components/farmer/Content";

const HomePageFarmer = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <Content />
      <NewsService/>
    </div>
  );
};

export default HomePageFarmer;
