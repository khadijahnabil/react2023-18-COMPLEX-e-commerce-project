import { Outlet, useNavigation } from "react-router-dom-v5-compat";
import { Navbar, Sidebar, Footer } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='page'>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default HomeLayout;
