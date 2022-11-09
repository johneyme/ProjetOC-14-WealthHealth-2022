import { createContext, useState, useMemo } from 'react';

//create a context, with createContext api
export const employeesContext = createContext();

const EmployeesProvider = (props) => {
  // this state will be shared with all components

  const [allEmployees, setAllEmployees] = useState([
    {
      firstName: 'Test',
      lastName: 'User00',
      dateOfBirth: '2020-10-15',
      startDate: '2020-10-15',
      street: 'A Random Street',
      city: 'Random City',
      state: 'AL',
      zipCode: '12345',
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
