import React from 'react';

function Grade(props) {

  function deleteEntry() {
    return props.deleteProp(props.sending.id);
  }

  return (

    <tr>
      <td className="align-middle">{props.sending.name}</td>
      <td className="align-middle">{props.sending.course}</td>
      <td className="align-middle">{props.sending.grade}</td>
      <td className="hideDelete align-middle"><i className="fas fa-times-circle" onClick={deleteEntry}></i></td>

    </tr>

  );

}

export default Grade;
