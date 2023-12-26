import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h1>Checkbox Example</h1>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {' '}
        Show Greeting
      </label>
      <br />
      {isChecked && <p>Hello! Welcome to our application.</p>}
    </div>
  );
}

export default CheckboxExample;
