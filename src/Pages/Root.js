import { Outlet } from "react-router-dom";
import Footer from "../Components/UI/Footer";
import Navbar from "../Components/UI/Navbar";
import classes from "./Root.module.css";
function RootLayout() {
  return (
    <div className={classes.container}>
      <Navbar />
      <main className={classes.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default RootLayout;
