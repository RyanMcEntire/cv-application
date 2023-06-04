import React, { Component } from 'react';

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <div>
        <form action="">
          <h2>{title}</h2>
          <fieldset>
            <div>
              <label htmlFor="companyName">Company Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="positionTitle">Position Title</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="dateWorked">Date worked:</label>from:
              <input type="date" />
              to:
              <input type="date" />
            </div>
          </fieldset>
          <button>Submit</button>
          <button>Add More +</button>
          <button className="edit-experience">Edit</button>
        </form>
      </div>
    );
  }
}
