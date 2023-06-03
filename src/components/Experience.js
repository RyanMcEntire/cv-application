import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <div>
        <form action="">
          <h2>Employment</h2>
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
          <button className='edit-experience'>Edit</button>
        </form>
      </div>
    );
  }
}
