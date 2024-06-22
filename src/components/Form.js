import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/validate';

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submit, validate);
  const [isGuest, setIsGuest] = useState(false);

  function submit() {
    alert('Form submitted successfully');
  }

  return (
    <div>
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={values.age || ''}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label>Are you attending with a guest?</label>
          <select
            name="isGuest"
            value={isGuest ? 'Yes' : 'No'}
            onChange={(e) => setIsGuest(e.target.value === 'Yes')}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {isGuest && (
          <div>
            <label>Guest Name:</label>
            <input
              type="text"
              name="guestName"
              value={values.guestName || ''}
              onChange={handleChange}
            />
            {errors.guestName && <p>{errors.guestName}</p>}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {values.submitted && (
        <div className="summary">
          <h2>Form Data</h2>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Age: {values.age}</p>
          <p>Attending with Guest: {isGuest ? 'Yes' : 'No'}</p>
          {isGuest && <p>Guest Name: {values.guestName}</p>}
        </div>
      )}
    </div>
  );
};

export default Form;
