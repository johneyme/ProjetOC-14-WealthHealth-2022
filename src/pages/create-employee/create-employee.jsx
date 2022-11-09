import './create-employee.css';
import 'react-datepicker/dist/react-datepicker.css';

import { useState, useContext, useEffect } from 'react';
import { states } from '../../data/states';
import { departments } from '../../data/department';

import DatePicker from 'react-datepicker';
import Modal from '../../components/modal/modal';
import { employeesContext } from '../../utils/employeesProvider';
import DropdownSelect from '../../components/dropdown-select/dropdown-select';

function CreateEmployee() {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const { allEmployees, setAllEmployees } = useContext(employeesContext);

  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  function handleSubmit() {
    setNewEmployee({
      ...newEmployee,
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      dateOfBirth: document.getElementById('date-of-birth').value,
      startDate: document.getElementById('start-date').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zipCode: document.getElementById('zip-code').value,
      department: document.getElementById('department').value,
    });
    // Adds the new employee to the global storage array
    setAllEmployees((current) => [...current, newEmployee]);
  }
  useEffect(() => {
    console.log(allEmployees);
  });

  return (
    <section className="create-employee-section">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="firstName" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="lastName" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" name="dateOfBirth" />

        <label htmlFor="start-date">Start Date</label>

        <DatePicker
          id="start-date"
          selected={startDate}
          name="startDate"
          onChange={(date) => setStartDate(date)}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" name="street" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" name="city" />

          <label htmlFor="state">State</label>
          <DropdownSelect
            name="state"
            id="state"
            array={states}
            stateData={true}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" name="zipCode" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <DropdownSelect
          name="department"
          id="department"
          array={departments}
          stateData={false}
        />
      </form>

      <button
        className="primaryBtn "
        onClick={() => handleSubmit(setIsOpen(true))}
      >
        Save
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} modalText="Employee Created !" />}
    </section>
  );
}

export default CreateEmployee;
