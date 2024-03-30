import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
export default function Layout() {
  return (
    <ReduxProvider store={store}>
      <div className="flex flex-col min-h-dvh justify-between">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ReduxProvider>
  );
}
