import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    return (
      <div>
        <form action="">
          <h2>Education</h2>
          <fieldset>
            <div>
              <label htmlFor="schoolName">School Name:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="titleOfStudy">Title of Study:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="dateOfStudy">Date of Study:</label>
              <input type="date" />
            </div>
          </fieldset>
          <button>Submit</button>
          <button>Add More +</button>
          <button className="edit-education">Edit</button>
        </form>
      </div>
    );
  }
}
