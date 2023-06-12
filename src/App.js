import React, { useState, useEffect } from 'react';
import General from './components/General';
import ExperienceList from './components/ExperienceList';
import EducationList from './components/EducationList';
import DisplayCV from './components/display/DisplayCV';
import uniqid from 'uniqid';

const App = () => {
  const [general, setGeneral] = useState(null);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => document.body.classList.add('bg-blue-200'));

  const onSubmitGeneral = (newGeneral) => setGeneral(newGeneral);

  const onSubmitEducation = (newEducation) => {
    setEducations((prevState) => {
      const updatedEducations = prevState.map((education) => {
        if (education.id === newEducation.id) {
          return newEducation;
        }
        return education;
      });
      return updatedEducations;
    });
  };

  const onSubmitExperience = (newExperience) => {
    setExperiences((prevState) => {
      const updatedExperiences = prevState.map((experience) => {
        if (experience.id === newExperience.id) {
          return newExperience;
        }
        return experience;
      });
      return updatedExperiences;
    });
  };

  const blankEduForm = { id: uniqid(), name: '', title: '', date: '' };

  const addEduForm = () =>
    setEducations((prevState) => [...prevState, blankEduForm]);

  const blankExpForm = {
    id: uniqid(),
    name: '',
    title: '',
    dateStart: '',
    dateEnd: '',
  };

  const addExpForm = () =>
    setExperiences((prevState) => [...prevState, blankExpForm]);

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
              onExperienceSubmitted={onSubmitExperience}
              experiences={experiences}
            />
            <button
              className="rounded-full bg-slate-800 px-3 text-slate-100"
              onClick={addExpForm}
            >
              Add More +
            </button>
          </div>
        </div>
      </div>
      <DisplayCV
        general={general}
        educations={educations}
        experiences={experiences}
      />
    </div>
  );
};

export default App;
