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
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            onGeneralSubmitted(this.state);
          }}
        >
          <h2 className="text-3xl font-semibold">{title}</h2>
          <fieldset className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label htmlFor="name">Name:</label>
              <input name="name" onChange={this.changeName} type="text" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input name="email" onChange={this.changeEmail} type="email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Phone:</label>
              <input name="phone" onChange={this.changePhone} type="phone" />
            </div>
          </fieldset>
          <button className="rounded-full bg-slate-600 px-3 text-slate-100">Submit</button>
        </form>
      </div>
    );
  }
}
