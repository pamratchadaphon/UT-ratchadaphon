import { useState } from "react"
import { FaRegEdit } from "react-icons/fa"


const EditIncome = () => {
    const [modal, setModal] = useState(false)
  return (
    <div>
      <button
        className="flex justify-center items-center w-8 h-8"
        onClick={() => setModal(!modal)}
      >
        <FaRegEdit className="w-5 h-5" />
      </button>
    </div>
  )
}

export default EditIncome
