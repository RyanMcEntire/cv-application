import React, { Component } from 'react';
import Experience from './Experience';

export default class ExperienceList extends Component {
  render() {
    const { experiences, onExperienceSubmitted } = this.props;
    return experiences.map((experience) => {
      return (
        <>
          <Experience
            key={experience.id}
            experience={experience}
            onExperienceSubmitted={onExperienceSubmitted}
          />
          
        </>
      );
    });
  }
}
