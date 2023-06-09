import React, { useState } from 'react';

const EmployeeCard = ({ name, position }) => {
  const [salary, setSalary] = useState(0);

  const increaseSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Position: {position}</p>
      <p>Salary: ${salary}</p>
      <button onClick={increaseSalary}>Increase Salary</button>
    </div>
  );
};

export default EmployeeCard;
