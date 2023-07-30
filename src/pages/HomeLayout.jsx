import { Outlet, useNavigation } from "react-router-dom-v5-compat";
import { Navbar, Sidebar, Footer } from "../components";

const HomeLayout = () => {
  return (
    <>
      <section className='page'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
