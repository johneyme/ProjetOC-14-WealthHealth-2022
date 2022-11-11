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
    // Adds the new employee to the global storage array
    setAllEmployees((current) => [...current, newEmployee]);
  }
  useEffect(() => {
    console.log(allEmployees);
    console.log(newEmployee);
  });

  return (
    <section className="create-employee-section">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          onChange={(e) =>
            setNewEmployee((currValue) => ({
              ...currValue,
              firstName: e.target.value,
            }))
          }
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          onChange={(e) =>
            setNewEmployee((currValue) => ({
              ...currValue,
              lastName: e.target.value,
            }))
          }
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input
          id="date-of-birth"
          type="text"
          name="dateOfBirth"
          onChange={(e) =>
            setNewEmployee((currValue) => ({
              ...currValue,
              dateOfBirth: e.target.value,
            }))
          }
        />

        <label htmlFor="start-date">Start Date</label>

        <DatePicker
          id="start-date"
          selected={startDate}
          name="startDate"
          dateFormat="yyyy/MM/dd"
          onSelect={(e) =>
            setStartDate(
              e,

              setNewEmployee((currValue) => ({
                ...currValue,
                startDate: document.getElementById('start-date').value,
              }))
            )
          }
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            onChange={(e) =>
              setNewEmployee((currValue) => ({
                ...currValue,
                street: e.target.value,
              }))
            }
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            onChange={(e) =>
              setNewEmployee((currValue) => ({
                ...currValue,
                city: e.target.value,
              }))
            }
          />

          <label htmlFor="state">State</label>
          <DropdownSelect
            name="state"
            id="state"
            array={states}
            stateData={true}
            change={(e) =>
              setNewEmployee((currValue) => ({
                ...currValue,
                state: e.target.value,
              }))
            }
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            name="zipCode"
            onChange={(e) =>
              setNewEmployee((currValue) => ({
                ...currValue,
                zipCode: e.target.value,
              }))
            }
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <DropdownSelect
          name="department"
          id="department"
          array={departments}
          stateData={false}
          change={(e) =>
            setNewEmployee((currValue) => ({
              ...currValue,
              department: e.target.value,
            }))
          }
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
