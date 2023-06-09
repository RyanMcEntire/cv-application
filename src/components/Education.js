import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      date: '',
      id: this.props.id,
    };

    this.changeName = this.changeName.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  changeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  render() {
    const { onEducationSubmitted } = this.props;

    return (
      <div>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            onEducationSubmitted(this.state);
          }}
        >
          <fieldset className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label htmlFor="schoolName">School Name:</label>
              <input
                className=""
                name="schoolName"
                onChange={this.changeName}
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="titleOfStudy">Title of Study:</label>
              <input
                name="titleOfStudy"
                onChange={this.changeTitle}
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dateOfStudy">Date of Study:</label>
              <input
                name="dateOfStudy"
                onChange={this.changeDate}
                type="date"
              />
            </div>
          </fieldset>
          <button className="rounded-full bg-slate-600 px-3 text-slate-100">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
