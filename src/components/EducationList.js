import React, { Component } from 'react';
import Education from './Education';

export default class EducationList extends Component {
  render() {
    const { educations, onEducationSubmitted } = this.props;
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
}
