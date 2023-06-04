import React, { Component } from 'react';

export default class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
    };

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  changePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  render() {
    const { title, onGeneralSubmitted } = this.props;

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onGeneralSubmitted(this.state);
          }}
          action=""
        >
          <h2>{title}</h2>
          <fieldset>
            <div>
              <label htmlFor="name">Name:</label>
              <input name="name" onChange={this.changeName} type="text" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input name="email" onChange={this.changeEmail} type="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input name="phone" onChange={this.changePhone} type="phone" />
            </div>
          </fieldset>
          <button onSubmit={onGeneralSubmitted}>Submit</button>
          <button className="edit-general">Edit</button>
        </form>
      </div>
    );
  }
}
