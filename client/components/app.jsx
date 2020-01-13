import React from 'react';
import Header from './header';
import GradeTable from './GradeTable';
import GradeForm from './GradeForm';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []

    };
    this.addRecord = this.addRecord.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.getGrades = this.getGrades.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {

        this.setState({ grades: data });

      })
      .catch(err => console.error('Fetch failed!', err));

    this.getAverageGrade();

  }

  addRecord(newRow) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRow)
    })
      .then(response => response.json())
      .then(data => this.setState({ grades: this.state.grades.concat(data) }))
      .catch(err => console.error('Fetch failed!', err));
  }

  deleteGrade(id) {
    const array = [...this.state.grades];
    const index = array.findIndex(x => x.id === id);
    array.splice(index, 1);
    fetch('/api/grades', {
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE'
    }).then(response => response.json())
      .then(data => this.setState({ grades: array }))
      .catch(err => console.error('Get All Grades fetch failed', err));
  }

  getAverageGrade() {

    var total = 0;
    var count = this.state.grades.length;
    if (count === 0) {
      return;
    }

    for (var index = 0; index < count; index++) {
      total += this.state.grades[index].grade;
    }
    const avg = Math.round(total / index);

    return avg;

  }

  render() {
    return (
      <div>
        <Header newProp = {this.getAverageGrade()}/>
        <GradeTable gradeSent={this.state.grades} deleteProp={this.deleteGrade}/>
        <GradeForm newRecord={this.addRecord}/>

      </div>
    );
  }
}
