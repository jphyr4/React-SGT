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

    let changeState = {};
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
      <form
        className="inputForms"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <div className="form-group float-right col-md-4">
          <input
            name="name"
            onChange={this.handleChange}
            value={namevalue}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group float-right col-md-4">
          <input
            name="course"
            onChange={this.handleChange}
            value={coursevalue}
            type="text"
            className="form-control"
            placeholder="course"
          />
        </div>
        <div className="form-group float-right col-md-4">
          <input
            name="grade"
            onChange={this.handleChange}
            value={gradevalue}
            type="number"
            className="form-control"
            placeholder="Grade"
          />
          <button type="reset" className="btn btn-danger mb-2 ">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary mb-2 ">
            Add
          </button>
        </div>
      </form>
    );
  }
}
