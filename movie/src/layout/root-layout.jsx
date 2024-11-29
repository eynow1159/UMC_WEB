
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
// import Footer from "../components/footer";
import styled from "styled-components";

function RootLayout(){
  return (
    <Layout>
      <Navbar/>
      <Main>  
        <Sidebar/>
        <Outlet/>
      </Main>   
      {/* <Footer/> */}
    </Layout>
  )
}

export default RootLayout;

const Layout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
`