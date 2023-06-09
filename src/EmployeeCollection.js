import React from 'react';
import EmployeeCard from './EmployeeCard';

class EmployeeCollection extends React.Component {
  render() {
    const employees = [
      { name: 'Jungkook Jeon', position: 'Manager', duration: '10' },
      { name: 'Jane Smith', position: 'Developer', duration: '5' },
      // Additional employee data
    ];

    return (
      <div>
        {employees.map((employee, index) => (
          <EmployeeCard key={index} name={employee.name} position={employee.position} duration={employee.duration} />
        ))}
      </div>
    );
  }
}

export default EmployeeCollection;
