import React, { Component } from 'react';

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      dateStart: '',
      dateEnd: '',
      id: this.props.id,
    };

    this.changeName = this.changeName.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDateStart = this.changeDateStart.bind(this);
    this.changeDateEnd = this.changeDateEnd.bind(this);
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

  changeDateStart(e) {
    this.setState({
      dateStart: e.target.value,
    });
  }

  changeDateEnd(e) {
    this.setState({
      dateEnd: e.target.value,
    });
  }

  render() {
    const { onExperienceSubmitted } = this.props;

    return (
      <div>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            onExperienceSubmitted(this.state);
          }}
        >
          <fieldset className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label htmlFor="companyName">Company Name:</label>
              <input name="name" onChange={this.changeName} type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="positionTitle">Position Title:</label>
              <input name="title" onChange={this.changeTitle} type="text" />
            </div>
            <div className="flex flex-col">
              <p>Dates Worked:</p>
              <label htmlFor="dateStart">from:</label>
              <input
                name="dateStart"
                onChange={this.changeDateStart}
                type="date"
              />
              <label htmlFor="dateEnd">to:</label>
              <input name="dateEnd" onChange={this.changeDateEnd} type="date" />
            </div>
          </fieldset>
          <button className="rounded-full bg-slate-600 px-3 text-slate-100">Submit</button>
        </form>
      </div>
    );
  }
}
