import { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";

const Edit_RiceCaltivation = () => {
    const [modal, setModal] = useState(false)
  return (
    <div>
      <button
        className="flex justify-center items-center"
        onClick={() => setModal(!modal)}
      >
        <div className="hover:bg-orange-400 rounded-md bg-orange-100 text-orange-500 hover:text-white w-8 h-8 flex justify-center items-center border border-orange-200">
          <FaRegEdit className="w-5 h-5" />
        </div>
      </button>
    </div>
  )
}

export default Edit_RiceCaltivation
