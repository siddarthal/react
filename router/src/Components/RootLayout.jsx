import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <p>hi</p>
      <Outlet />
      <footer>Bye</footer>
    </>
  );
};
export default RootLayout;
