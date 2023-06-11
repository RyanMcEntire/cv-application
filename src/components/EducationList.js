import React, { useState } from 'react';
import Education from './Education';

export default function EducationList({ educations, onEducationSubmitted }) {
  // const { educations, onEducationSubmitted } = this.props;
  return educations
    .filter((education) => education !== null)
    .map((education) => {
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
