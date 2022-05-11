import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';


import { Outlet} from "react-router-dom";

const App = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      
      <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
      </a>
    </>
  )
};

export default App;