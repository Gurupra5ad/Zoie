import React from 'react';
import { NavLink } from 'react-router-dom';

import logo2 from '../../assets/logo.png';
import './style.less';

const Navbar = props => {
  return (
    <div className="nav">
      <div className="wrapper">
        <NavLink to="/" className="logo-nav">
          <img className="logo" src={logo2} alt="logo" />
        </NavLink>
        {/* <div className="items">
          <h1>analytics</h1>
          <h1>home</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
