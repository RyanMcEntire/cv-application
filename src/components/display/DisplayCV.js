import React, { Component } from 'react';

export default class DisplayCV extends Component {
  render() {
    const { general, educations, experiences } = this.props;

    return (
      <div className="w-1/2 bg-slate-100 p-12 font-serif">
        <GeneralDisplay general={general} />
        <div>
          <h2 className="text-lg font-bold">Education</h2>
          <EducationDisplay educations={educations} />
        </div>
        <div>
          <h2 className="text-lg font-bold">Experience</h2>
          <ExperienceDisplay experiences={experiences} />
        </div>
      </div>
    );
  }
}

class GeneralDisplay extends Component {
  render() {
    const { general } = this.props;
    if (general.length > 0) {
      return (
        <>
          <div className="flex flex-col items-end gap-1">
            <h1 className="text-4xl">{general[0].name}</h1>
            <div className="text-xs">{general[0].email}</div>
            <div className="text-xs">{general[0].phone}</div>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

class EducationDisplay extends Component {
  render() {
    const { educations } = this.props;
    if (educations.length > 0) {
      return educations
        .filter((edu) => edu !== null)
        .map((edu) => {
          return (
            <div className="flex flex-col gap-1 py-3 text-sm" key={edu.id}>
              <div className="flex gap-2">
                <h3 className="font-semibold">School Name:</h3>
                <div className="">{edu.name ? edu.name : ''}</div>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Title of Study:</h3>
                <div>{edu.title ? edu.title : ''}</div>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Date of Study:</h3>
                <div>{edu.date ? edu.date : ''}</div>
              </div>
            </div>
          );
        });
    } else {
      return null;
    }
  }
}

class ExperienceDisplay extends Component {
  render() {
    const { experiences } = this.props;
    if (experiences.length > 0) {
      return experiences
        .filter((exp) => exp !== null)
        .map((exp) => {
          return (
            <div className="flex flex-col gap-1 py-3 text-sm" key={exp.id}>
              <div className="flex gap-2">
                <h3 className="font-semibold">Company Name:</h3>
                <div>{exp.name ? exp.name : ''}</div>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Position Title:</h3>
                <div>{exp.title ? exp.title : ''}</div>
              </div>
              <div className="flex gap-2">
                <h3 className="font-semibold">Dates Worked</h3>
                <div className="flex gap-2">
                  <div className="font-semibold">Start:</div>
                  <div>{exp.dateStart ? exp.dateStart : ''}</div>
                </div>
                <div className="flex gap-2">
                  <div className="font-semibold">End:</div>
                  <div>{exp.dateEnd ? exp.dateEnd : ''}</div>
                </div>
              </div>
            </div>
          );
        });
    } else {
      return null;
    }
  }
}
