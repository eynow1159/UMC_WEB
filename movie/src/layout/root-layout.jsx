
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
// import Footer from "../components/footer";

function RootLayout(){
  return (
    <>
      <Navbar/>
      <div style={{display:"flex",flexDirection:"row"}}>  
        <Sidebar/>
        <Outlet/>
      </div>   
      {/* <Footer/> */}
      </>
  )
}

export default RootLayout;
