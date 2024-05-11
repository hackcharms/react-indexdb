import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/portfolio/motion/Footer";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
export default function Layout() {
  return (
    <ReduxProvider store={store}>
      <div className="text-light-500 flex min-h-dvh bg-primary flex-col justify-center ">
        <Navbar />
        <div className="grow flex justify-center">
          <div className="max-w-6xl">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </ReduxProvider>
  );
}
