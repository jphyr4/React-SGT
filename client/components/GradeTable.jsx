import React from 'react';
import Grade from './grade';

function GradeTable(props) {

  const tempArr = props.gradeSent.map((element, index) => <Grade key={index} sending={element} deleteProp={props.deleteProp}/>);
  return (
    <div className="table-responsive tablePadding">
      <table className="table table-hover table-striped tbody text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th className="hideOperation" scope="col">Ops</th>
          </tr>
        </thead>
        <tbody>
          {tempArr}
        </tbody>

      </table>
    </div>
  );

}

export default GradeTable;
