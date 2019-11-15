import React from 'react';

function Header(props) {

  return (
    <div className="row">
      <h1 className="col-8">Student Grade Table</h1>
      <h1 className="col-4">Average Grade: {props.newProp}</h1>

    </div>
  );

}
export default Header;
