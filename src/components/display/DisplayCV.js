import React, { Component } from 'react';

export default class DisplayCV extends Component {
  render() {
    const { general, educations, experiences } = this.props;

    return (
      <div>
        <GeneralDisplay general={general} />
        <EducationDisplay educations={educations} />
        <ExperienceDisplay experiences={experiences} />
      </div>
    );
  }
}

class GeneralDisplay extends Component {
  render() {
    const { general } = this.props;
    return (
      <>
        <div>
          <h1>{general.name}</h1>
        </div>
      </>
    );
  }
}

class EducationDisplay extends Component {
  render() {
    const { educations } = this.props;

    return educations.map((edu) => {
      return (
        <div key={edu.id}>
          <div className="school-name-container">
            <h3>School Name:</h3>
            <div>{edu.name ? edu.name : ''}</div>
          </div>
          <div className="school-title-container">
            <h3>Title of Study:</h3>
            <div>{edu.title ? edu.title : ''}</div>
          </div>
          <div className="school-date-container">
            <h3>Date of Study</h3>
            <div>{edu.date ? edu.date : ''}</div>
          </div>
        </div>
      );
    });
  }
}

class ExperienceDisplay extends Component {
  render() {
    const { experiences } = this.props;

    return <div>exp</div>;
  }
}
