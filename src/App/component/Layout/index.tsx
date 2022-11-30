import { Outlet, Link } from "react-router-dom";
// import Visualization from '../Visualization'
// import Contact from "../Contact";
// import Home from "../home";

import HeaderMenu from '../HeaderMenu';

import './index.css';

const Layout = () => {
  return (
    <div className="layout">
      <HeaderMenu />

      <div className="main">
        <Outlet />
      </div>
    
    </div>
  )
};

export default Layout;