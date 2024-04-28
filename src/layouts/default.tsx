import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
export default function Layout() {
  return (
    <ReduxProvider store={store}>
      <div className="bg-hero-pattern flex min-h-dvh flex-col justify-between">
        <Navbar />
        <div className="grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ReduxProvider>
  );
}
