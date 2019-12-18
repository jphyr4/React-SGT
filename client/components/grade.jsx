import React from 'react';

function Grade(props) {

  function deleteEntry() {
    return props.deleteProp(props.sending.id);
  }

  return (

    <tr>
      <td>{props.sending.name}</td>
      <td>{props.sending.course}</td>
      <td>{props.sending.grade}</td>
      <td><button type="button" className="btn btn-outline-danger" onClick={deleteEntry}>Delete</button></td>
    </tr>

  );

}

export default Grade;
