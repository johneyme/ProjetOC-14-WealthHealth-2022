import './employee-list.css';
import DataTableComponent from '../../components/datatable/datable';
import { useState, useEffect } from 'react';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    if (employees) {
      setEmployees(employees);
    }
  }, []);

  return (
    <section>
      <DataTableComponent data={employees} />
    </section>
  );
}

export default EmployeeList;
