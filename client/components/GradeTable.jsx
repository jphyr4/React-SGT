import React from 'react';
import Grade from './grade';

function GradeTable(props) {

  const tempArr = props.gradeSent.map((element, index) => <Grade key={index} sending={element}/>);
  return (
    <table className="table table-hover float-left col-md-8">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        {tempArr}
      </tbody>

    </table>
  );

}

export default GradeTable;
