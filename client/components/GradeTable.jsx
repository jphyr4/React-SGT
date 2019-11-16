import React from 'react';
import Grade from './grade';

function GradeTable(props) {

  const tempArr = props.gradeSent.map((element, index) => <Grade key={index} sending={element}/>);
  return (
    <table className="table table-hover tableStyle">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {tempArr}
      </tbody>

    </table>
  );

}

export default GradeTable;
