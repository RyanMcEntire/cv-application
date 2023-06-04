import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmitGeneral = this.onSubmitGeneral.bind(this);
  }

  onSubmitGeneral(submittedState) {
    console.log(submittedState);
  }

  onSubmitEducation(submittedState) {
    console.log(submittedState);
  }

  render() {
    return (
      <div>
        <General
          title="General Info"
          onGeneralSubmitted={this.onSubmitGeneral}
        />
        <Education
          title="Education"
          onEducationSubmitted={this.onSubmitEducation}
        />
        <Experience title="Experience" />
      </div>
    );
  }
}
