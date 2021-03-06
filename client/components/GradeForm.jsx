import React from 'react';
export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {

    const changeState = {};
    changeState[event.target.name] = event.target.value;
    this.setState(changeState);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newRow = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade)
    };

    if (this.state.name === '' || this.state.course === '') {

      return false;
    }

    if (this.state.grade === '' || this.state.grade < 0 || this.state.grade > 100) {

      return false;
    }

    this.props.newRecord(newRow);
    this.handleReset();

  }

  handleReset() {
    this.setState({ name: '', course: '', grade: '' });
  }

  render() {

    const namevalue = this.state.name;
    const coursevalue = this.state.course;
    const gradevalue = this.state.grade;

    return (

      <nav className="navbar fixed-bottom navbar-dark bg-dark d-flex justify-content-around navBottom">
        <h4 className="navFont d-none d-md-block">Add a Student:</h4>
        <form
          className="inputForms"
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
        >
          <div className="row">
            <div className="form-group col">

              <input
                name="name"
                onChange={this.handleChange}
                value={namevalue}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>

            <div className="form-group col">

              <input
                name="course"
                onChange={this.handleChange}
                value={coursevalue}
                type="text"
                className="form-control"
                placeholder="Course"
              />
            </div>

            <div className="form-group col">

              <input
                name="grade"
                onChange={this.handleChange}
                value={gradevalue}
                type="number"
                className="form-control"
                placeholder="Grade"
              />
            </div>
            <div className="col btn-toolbar justify-content-center">
              <button type="reset" className="btn btn-danger mb-2 mr-2 hideButton buttonMargin">
            Cancel
              </button>
              <button type="submit" className="btn btn-primary mb-2">
            Add
              </button>
            </div>
          </div>
        </form>
      </nav>

    );
  }
}
