import { useParams } from "react-router-dom";
import ModalAddRicecrop from "../../components/farmer/ModalAddRicecrop";
import Navbar from "../../components/farmer/Navbar";
import TableRicecrop from "../../components/farmer/TableRicecrop";
import { motion } from "framer-motion";

const Ricecrop = () => {
  const farmer_id = Number(useParams().farmer_id);

  return (
    <div>
      <Navbar id={farmer_id} page={"riceCaltivation"} />
      <div className="mx-auto max-w-screen-xl h-screen flex flex-col gap-4 pt-4 px-4">
        <div className="w-full md:hidden">
          <ModalAddRicecrop />
        </div>
        <div className="lg:m-0">
          <motion.div
            initial={{ x: -100, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-between items-center"
          >
            <ModalAddRicecrop />
          </motion.div>
          <div>
            <TableRicecrop farmer_id={farmer_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ricecrop;
