import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/portfolio/motion/Footer";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
export default function Layout() {
  return (
    <ReduxProvider store={store}>
      <div className="flex min-h-dvh flex-col justify-center bg-primary text-light-500 ">
        <Navbar />
        <div className="flex grow justify-center">
          <div className="max-w-6xl">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </ReduxProvider>
  );
}
