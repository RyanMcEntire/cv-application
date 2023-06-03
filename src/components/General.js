import React, { Component } from 'react';

export default class General extends Component {
  render() {
    return (
      <div>
        <form action="">
          <h2>General Info</h2>
          <fieldset>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="phone" />
            </div>
          </fieldset>
          <button>Submit</button>
          <button className="edit-general">Edit</button>
        </form>
      </div>
    );
  }
}
