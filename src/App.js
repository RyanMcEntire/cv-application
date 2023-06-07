import React, { Component } from 'react';
import General from './components/General';
import ExperienceList from './components/ExperienceList';
import EducationList from './components/EducationList';
import DisplayCV from './components/display/DisplayCV';
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
    console.log(this.state);
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
    console.log(this.state);
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
    console.log(this.state);
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
        <div className="form-container">
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

        <DisplayCV
          general={this.state.general}
          educations={this.state.educations}
          experiences={this.state.educations}
        />
      </div>
    );
  }
}
