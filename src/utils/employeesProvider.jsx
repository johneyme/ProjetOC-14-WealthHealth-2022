import { createContext, useState, useMemo } from 'react';

//create a context, with createContext api
export const employeesContext = createContext();

const EmployeesProvider = (props) => {
  // this state will be shared with all components

  const [allEmployees, setAllEmployees] = useState([
    {
      firstName: 'Test-Prénom',
      lastName: 'Test-Nom',
      dateOfBirth: '01/01/2010',
      startDate: '01/09/2022',
      street: '15 Street Bridge',
      city: 'Denver',
      state: 'CO',
      zipCode: '80012',
      department: 'Sales',
    },
  ]);
  const value = useMemo(
    () => ({
      allEmployees,
      setAllEmployees,
    }),
    [allEmployees, setAllEmployees]
  );
  return (
    // this is the provider providing state
    <employeesContext.Provider value={value}>
      {props.children}
    </employeesContext.Provider>
  );
};

export default EmployeesProvider;
