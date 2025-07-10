import { Outlet } from "react-router-dom";
// import Header from "
// ";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div  >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
