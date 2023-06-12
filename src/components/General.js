import React, { useState } from 'react';

export default function General({ title, onGeneralSubmitted }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const generalInfo = { name, email, phone };

  function changeName(e) {
    setName(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <div>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onGeneralSubmitted(generalInfo);
        }}
      >
        <h2 className="text-3xl font-semibold">{title}</h2>
        <fieldset className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input name="name" onChange={changeName} type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input name="email" onChange={changeEmail} type="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone:</label>
            <input name="phone" onChange={changePhone} type="phone" />
          </div>
        </fieldset>
        <button className="rounded-full bg-slate-600 px-3 text-slate-100">
          Submit
        </button>
      </form>
    </div>
  );
}
