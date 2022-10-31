import './create-employee.css';
import 'react-datepicker/dist/react-datepicker.css';

import { useEffect, useState } from 'react';
import { states } from '../../data/states';
import { departments } from '../../data/department';

import DatePicker from 'react-datepicker';
import Modal from '../../components/modal/modal';
import saveEmployee from '../../utils/save-employee';
import DropdownSelect from '../../components/dropdown-select/dropdown-select';

function CreateEmployee() {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [employees, setEmployees] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [listEmployees, setListEmployees] = useState({});

  function handleClick() {
    setEmployees({
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      dateOfBirth: document.getElementById('date-of-birth').value,
      startDate: document.getElementById('start-date').value,
      department: document.getElementById('department').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zipCode: document.getElementById('zip-code').value,
    });
    setListEmployees(employees);
  }

  useEffect(() => {
    console.log(listEmployees);
  }, [listEmployees]);

  return (
    <section className="create-employee-section">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label htmlFor="start-date">Start Date</label>

        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <DropdownSelect
            name="state"
            id="state"
            array={states}
            stateData={true}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
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
        onClick={() => handleClick(setIsOpen(true))}
      >
        Save
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} modalText="Employee Created !" />}
    </section>
  );
}

export default CreateEmployee;
