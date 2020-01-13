import React from 'react';

function Header(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top navHeight centerHead">
      <h3 className="col-9 centerTitle">Student Grade Table</h3>
      <h5 className="col-3 text-center hideAvg">Average: {props.newProp}</h5>
    </nav>

  );

}
export default Header;
