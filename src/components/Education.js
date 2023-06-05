import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      date: '',
      id: '',
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
          onSubmit={(e) => {
            e.preventDefault();
            onEducationSubmitted(this.state);
          }}
        >
          <fieldset>
            <div>
              <label htmlFor="schoolName">School Name:</label>
              <input name="schoolName" onChange={this.changeName} type="text" />
            </div>
            <div>
              <label htmlFor="titleOfStudy">Title of Study:</label>
              <input
                name="titleOfStudy"
                onChange={this.changeTitle}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="dateOfStudy">Date of Study:</label>
              <input
                name="dateOfStudy"
                onChange={this.changeDate}
                type="date"
              />
            </div>
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
