import React, { Component } from 'react';
import General from './components/General';
import ExperienceList from './components/ExperienceList';
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
    this.addExpForm = this.addExpForm.bind(this);
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
    this.setState((prevState) => {
      const updatedExperiences = prevState.experiences.map((experience) => {
        if (experience.id === newExperience.id) {
          return newExperience;
        }
        return experience;
      });
      return { experiences: updatedExperiences };
    });
  }

  addEduForm() {
    this.setState((prevState) => ({
      educations: [...prevState.educations, { id: uniqid() }],
    }));
  }

  addExpForm() {
    this.setState((prevState) => ({
      experiences: [...prevState.experiences, { id: uniqid() }],
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
        <h2>Work Experience</h2>
        <div>
          <ExperienceList
            onExperienceSubmitted={this.onSubmitExperience}
            experiences={this.state.experiences}
          />
          <button onClick={this.addExpForm}>Add More +</button>
        </div>
      </div>
    );
  }
}
