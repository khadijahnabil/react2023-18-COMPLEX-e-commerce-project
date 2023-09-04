import { Outlet } from "react-router-dom-v5-compat";

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
