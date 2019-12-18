import React from 'react';

function Grade(props) {

  return (

    <tr>
      <td>{props.sending.name}</td>
      <td>{props.sending.course}</td>
      <td>{props.sending.grade}</td>
      <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
    </tr>

  );

}

export default Grade;
