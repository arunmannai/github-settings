import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
        <SubHeader />
      </header>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <aside>
              <Sidebar />
            </aside>
          </div>
          <div className="col-sm-9">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
