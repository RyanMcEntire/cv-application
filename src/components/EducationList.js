import React from 'react';
import Education from './Education';

export default function EducationList({ educations, onEducationSubmitted }) {
  return educations.map((education) => {
    return (
      <Education
        key={education.id}
        id={education.id}
        education={education}
        onEducationSubmitted={onEducationSubmitted}
      />
    );
  });
}
