import React, { useState, useEffect } from 'react';
import General from './components/General';
import ExperienceList from './components/ExperienceList';
import EducationList from './components/EducationList';
import DisplayCV from './components/display/DisplayCV';
import uniqid from 'uniqid';

const App = () => {
  // this.state = {
  //   general: [],
  //   educations: [],
  //   experiences: [],
  // };
  const [general, setGeneral] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => document.body.classList.add('bg-blue-200'));

  // onSubmitGeneral(newGeneral) {
  //   this.setState(
  //     {
  //       general: [newGeneral],
  //     },
  //     () => console.log(this.state)
  //   );
  // }

  const onSubmitGeneral = (newGeneral) =>
    setGeneral(newGeneral, () => console.log(general));

  // onSubmitEducation(newEducation) {
  //   this.setState(
  //     (prevState) => {
  //       const updatedEducations = prevState.educations.map((education) => {
  //         if (education.id === newEducation.id) {
  //           return newEducation;
  //         }
  //         return education;
  //       });
  //       return { educations: updatedEducations };
  //     },
  //     () => console.log(this.state)
  //   );
  // }

  const onSubmitEducation = (newEducation) => {
    setEducations(
      (prevState) => {
        const updatedEducations = prevState.map((education) => {
          if (education.id === newEducation.id) {
            return newEducation;
          }
          return education;
        });
        return updatedEducations;
      },
      () => console.log(educations)
    );
  };

  // onSubmitExperience(newExperience) {
  //   this.setState(
  //     (prevState) => {
  //       const updatedExperiences = prevState.experiences.map((experience) => {
  //         if (experience.id === newExperience.id) {
  //           return newExperience;
  //         }
  //         return experience;
  //       });
  //       return { experiences: updatedExperiences };
  //     },
  //     () => console.log(this.state)
  //   );
  // }

  // addEduForm() {
  //   this.setState((prevState) => ({
  //     educations: [
  //       ...prevState.educations,
  //       { id: uniqid(), name: '', title: '', date: '' },
  //     ],
  //   }));
  // }

  const blankEduForm = { id: uniqid(), name: '', title: '', date: '' };

  const addEduForm = () =>
    setEducations((prevState) => [...prevState, blankEduForm]);

  // addExpForm() {
  //   this.setState((prevState) => ({
  //     experiences: [
  //       ...prevState.experiences,
  //       { id: uniqid(), name: '', title: '', dateStart: '', dateEnd: '' },
  //     ],
  //   }));
  // }

  return (
    <div className=" flex text-slate-800">
      <div className="form-container flex w-1/2 flex-col gap-6 p-12">
        <General title="General Info" onGeneralSubmitted={onSubmitGeneral} />
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Education</h2>
          <EducationList
            onEducationSubmitted={onSubmitEducation}
            educations={educations}
          />
          <button
            className="rounded-full bg-slate-800 px-3 text-slate-100"
            onClick={addEduForm}
          >
            Add More +
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Work Experience</h2>
          <div className="flex flex-col gap-2">
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
};

export default App;
