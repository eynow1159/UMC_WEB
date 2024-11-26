
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
// import Footer from "../components/footer";
import styled from "styled-components";

function RootLayout(){
  return (
    <Layout>
      <Navbar/>
      <div style={{display:"flex",flexDirection:"row"}}>  
        <Sidebar/>
        <Outlet/>
      </div>   
      {/* <Footer/> */}
    </Layout>
  )
}

export default RootLayout;

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;