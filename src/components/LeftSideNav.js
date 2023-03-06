import React from "react";


// The sideNav bar

const LeftSideNav = () => {
  return (
    <div>
			<h1>Left Side Nav Component!</h1>
      <div>
        <ul id="sidenav">
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">Personal Info</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNav;
