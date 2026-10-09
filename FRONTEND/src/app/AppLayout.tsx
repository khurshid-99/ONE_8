import { Outlet } from "react-router";
import Navbar from "../utils/nav/Navbar";
import Footer from "../utils/footer/Footer";

const AppLayout = () => {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
