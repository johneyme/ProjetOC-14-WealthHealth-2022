import './employee-list.css';
import DataTableComponent from '../../components/datatable/datable';
import { useState, useContext, useEffect } from 'react';
import { employeesContext } from '../../utils/employeesProvider';

/**
 *
 * Employee list page who display table to return allEmployees
 *
 * @provider allEmployees
 *
 * @return DataTableComponent
 */

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const { allEmployees } = useContext(employeesContext);

  useEffect(() => {
    const employees = allEmployees;
    if (employees) {
      setEmployees(employees);
    }
  }, [allEmployees]);

  return (
    <section>
      <DataTableComponent data={employees} />
    </section>
  );
}

export default EmployeeList;
