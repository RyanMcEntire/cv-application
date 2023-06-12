import React, { useState } from 'react';

export default function Experience({ onExperienceSubmitted, id }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  function changeName(e) {
    setName(e.target.value);
  }

  function changeTitle(e) {
    setTitle(e.target.value);
  }

  function changeDateStart(e) {
    setDateStart(e.target.value);
  }

  function changeDateEnd(e) {
    setDateEnd(e.target.value);
  }

  return (
    <div>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const experienceInfo = { id, name, title, dateStart, dateEnd };
          onExperienceSubmitted(experienceInfo);
        }}
      >
        <fieldset className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="companyName">Company Name:</label>
            <input name="name" onChange={changeName} type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="positionTitle">Position Title:</label>
            <input name="title" onChange={changeTitle} type="text" />
          </div>
          <div className="flex flex-col">
            <p>Dates Worked:</p>
            <label htmlFor="dateStart">from:</label>
            <input name="dateStart" onChange={changeDateStart} type="date" />
            <label htmlFor="dateEnd">to:</label>
            <input name="dateEnd" onChange={changeDateEnd} type="date" />
          </div>
        </fieldset>
        <button className="rounded-full bg-slate-600 px-3 text-slate-100">
          Submit
        </button>
      </form>
    </div>
  );
}
