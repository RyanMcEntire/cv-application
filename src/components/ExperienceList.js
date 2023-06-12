import React from 'react';
import Experience from './Experience';

export default function ExperienceList({ experiences, onExperienceSubmitted }) {
  return experiences.map((experience) => {
    return (
      <Experience
        key={experience.id}
        id={experience.id}
        experience={experience}
        onExperienceSubmitted={onExperienceSubmitted}
      />
    );
  });
}
