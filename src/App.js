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

  componentDidMount() {
    document.body.classList.add('bg-red-300');
  }

  onSubmitGeneral(newGeneral) {
    this.setState(
      {
        general: [newGeneral],
      },
      () => console.log(this.state)
    );
  }

  onSubmitEducation(newEducation) {
    this.setState(
      (prevState) => {
        const updatedEducations = prevState.educations.map((education) => {
          if (education.id === newEducation.id) {
            return newEducation;
          }
          return education;
        });
        return { educations: updatedEducations };
      },
      () => console.log(this.state)
    );
  }

  onSubmitExperience(newExperience) {
    this.setState(
      (prevState) => {
        const updatedExperiences = prevState.experiences.map((experience) => {
          if (experience.id === newExperience.id) {
            return newExperience;
          }
          return experience;
        });
        return { experiences: updatedExperiences };
      },
      () => console.log(this.state)
    );
  }

  addEduForm() {
    this.setState((prevState) => ({
      educations: [
        ...prevState.educations,
        { id: uniqid(), name: '', title: '', date: '' },
      ],
    }));
  }

  addExpForm() {
    this.setState((prevState) => ({
      experiences: [
        ...prevState.experiences,
        { id: uniqid(), name: '', title: '', dateStart: '', dateEnd: '' },
      ],
    }));
  }

  render() {
    return (
      <div className=" flex p-6 text-slate-800">
        <div className="form-container flex flex-col">
          <General
            title="General Info"
            onGeneralSubmitted={this.onSubmitGeneral}
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">Education</h2>
            <EducationList
              onEducationSubmitted={this.onSubmitEducation}
              educations={this.state.educations}
            />
            <button
              className="rounded-full bg-slate-800 px-3 text-slate-100"
              onClick={this.addEduForm}
            >
              Add More +
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">Work Experience</h2>
            <div className="flex flex-col">
              <ExperienceList
                onExperienceSubmitted={this.onSubmitExperience}
                experiences={this.state.experiences}
              />
              <button
                className="rounded-full bg-slate-800 px-3 text-slate-100"
                onClick={this.addExpForm}
              >
                Add More +
              </button>
            </div>
          </div>
        </div>

        <DisplayCV
          general={this.state.general}
          educations={this.state.educations}
          experiences={this.state.experiences}
        />
      </div>
    );
  }
}
