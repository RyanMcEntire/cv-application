import React, { Component } from 'react';
import General from './components/General';
import Experience from './components/Experience';
import EducationList from './components/EducationList';
import uniqid from 'uniqid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [],
      educations: [],
      experiences: [],
    };

    this.onSubmitGeneral = this.onSubmitGeneral.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.onSubmitExperience = this.onSubmitExperience.bind(this);
    this.addEduForm = this.addEduForm.bind(this);
  }

  onSubmitGeneral(newGeneral) {
    this.setState({
      general: [newGeneral],
    });
  }

  onSubmitEducation(newEducation) {
    this.setState((prevState) => {
      const updatedEducations = prevState.educations.map((education) => {
        if (education.id === newEducation.id) {
          return newEducation;
        }
        return education;
      });
      return { educations: updatedEducations };
    });
  }

  onSubmitExperience(newExperience) {
    this.setState((prevState) => ({
      experiences: [...prevState.experiences, newExperience],
    }));
  }

  addEduForm() {
    this.setState((prevState) => ({
      educations: [...prevState.educations, { id: uniqid() }],
    }));
  }

  render() {
    return (
      <div>
        <General
          title="General Info"
          onGeneralSubmitted={this.onSubmitGeneral}
        />
        <div>
          <h2>Education</h2>
          <EducationList
            onEducationSubmitted={this.onSubmitEducation}
            educations={this.state.educations}
          />
          <button onClick={this.addEduForm}>Add More +</button>
        </div>
        <div>
          <Experience
            title="Experience"
            onExperienceSubmitted={this.onSubmitExperience}
          />
          <button>Add More +</button>
        </div>
      </div>
    );
  }
}
