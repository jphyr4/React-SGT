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
        <i className="fas fa-user"></i>
        <input
          name="name"
          onChange={this.handleChange}
          value={namevalue}
          type="text"
          className="form-group col-md-4"
          placeholder="Name"
        />

        <i className="fas fa-book"></i>
        <input
          name="course"
          onChange={this.handleChange}
          value={coursevalue}
          type="text"
          className="form-group col-md-4"
          placeholder="course"
        />
        <i className="fas fa-graduation-cap"></i>
        <input
          name="grade"
          onChange={this.handleChange}
          value={gradevalue}
          type="number"
          className="form-group col-md-4"
          placeholder="Grade"
        />
        <button type="reset" className="btn btn-danger mb-2 ">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary mb-2 ">
          Add
        </button>
      </form>
    );
  }
}
