import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';

class EmployeeCollection extends Component {
  render() {
    const employees = [
      { name: 'John Doe', position: 'Manager' },
      { name: 'Jane Smith', position: 'Developer' },
      { name: 'Bob Johnson', position: 'Designer' },
    ];

    return (
      <div>
        {employees.map((employee, index) => (
          <EmployeeCard key={index} name={employee.name} position={employee.position} />
        ))}
      </div>
    );
  }
}

export default EmployeeCollection;
