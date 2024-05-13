import Navbar from '../components/farmer/Navbar'

const FarmerRoute = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
  
}

export default FarmerRoute
