import React from 'react';
import Header from './header';
import GradeTable from './GradeTable';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.getGrades = this.getGrades.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error('Fetch failed!', err));

    this.getAverageGrade();

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
        <GradeTable gradeSent={this.state.grades}/>

      </div>
    );
  }
}
