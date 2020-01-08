import React from 'react';

function Header(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navHeight">
      <h3 className="col-10 text-center centerTitle">Student Grade Table</h3>
      <h5 className="col-2 text-center hideAvg">Average: {props.newProp}</h5>
    </nav>

  );

}
export default Header;
