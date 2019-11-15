import React from 'react';
import Header from './header';
import GradeTable from './GradeTable';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error('Fetch failed!', err));
  }

  render() {
    return (
      <div>
        <Header />
        <GradeTable gradeSent={this.state.grades}/>
      </div>
    );
  }
}
