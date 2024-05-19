import { useParams } from "react-router-dom";
import ModalAddRicecrop from "../../components/farmer/ModalAddRicecrop";
import Navbar from "../../components/farmer/Navbar";
import TableRicecrop from "../../components/farmer/TableRicecrop";

const Ricecrop = () => {
  const id = useParams();
  const idAsInt = Number(id);

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl h-screen flex flex-col gap-4 pt-4 px-4">
        <div className="w-full md:hidden">
          <ModalAddRicecrop />
        </div>
        <div className="lg:m-0 bg-white rounded-lg shadow p-4">
          <div className="hidden md:flex justify-between items-center">
            <ModalAddRicecrop/>
          </div>
          <TableRicecrop />
        </div>
      </div>
    </div>
  );
};

export default Ricecrop;
