import React, { Component } from 'react';
import Education from './Education';

export default class EducationList extends Component {
  render() {
    const { educations, onEducationSubmitted } = this.props;
    return educations.map((education) => {
      return (
        <Education
          key={education.id}
          education={education}
          onEducationSubmitted={onEducationSubmitted}
        />
      );
    });
  }
}
