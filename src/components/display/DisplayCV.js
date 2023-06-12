import React from 'react';

export default function DisplayCV({ general, educations, experiences }) {
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

function GeneralDisplay({ general }) {
  if (general) {
    return (
      <>
        <div className="flex flex-col items-end gap-1">
          <h1 className="text-4xl">{general.name}</h1>
          <div className="text-xs">{general.email}</div>
          <div className="text-xs">{general.phone}</div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

function EducationDisplay({ educations }) {
  if (educations.length > 0) {
    return educations.map((edu) => {
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

function ExperienceDisplay({ experiences }) {
  if (experiences.length > 0) {
    return experiences.map((exp) => {
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
