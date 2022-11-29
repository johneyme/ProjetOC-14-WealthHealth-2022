import './create-employee.css';
import 'react-datepicker/dist/react-datepicker.css';

import { useState, useContext, useEffect } from 'react';
import { states } from '../../data/states';
import { departments } from '../../data/department';

import DatePicker from 'react-datepicker';
import Modal from 'modal-extension-wh-p14';
//import Modal from '../../components/modal/modal';
import { employeesContext } from '../../utils/employeesProvider';
import DropdownSelect from '../../components/dropdown-select/dropdown-select';

/**
 *
 * Create employee page who display a form to push it on employee list
 *
 * @provider allEmployees
 *
 * @function handleSubmit to push newEmployee in allEmployee
 *
 * @returns {CreateEmployee}
 */

function CreateEmployee() {
  const [startDate, setStartDate] = useState(new Date());
  const [dateBirth, setDateBirth] = useState(new Date());
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
  });

  return (
    <section className="create-employee-section">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          className="input-create"
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
          className="input-create"
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
        <DatePicker
          className="input-create"
          id="start-date"
          selected={dateBirth}
          name="date-of-birth"
          dateFormat="dd/MM/yyyy"
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onSelect={(e) =>
            setDateBirth(
              e,
              setNewEmployee((currValue) => ({
                ...currValue,
                dateOfBirth: `${e.getDate()}/${
                  e.getMonth() + 1
                }/${e.getFullYear()}`,
              }))
            )
          }
        />

        <label htmlFor="start-date">Start Date</label>

        <DatePicker
          className="input-create"
          id="start-date"
          selected={startDate}
          name="startDate"
          dateFormat="dd/MM/yyyy"
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onSelect={(e) =>
            setStartDate(
              e,
              console.log(e),
              setNewEmployee((currValue) => ({
                ...currValue,
                startDate: `${e.getDate()}/${
                  e.getMonth() + 1
                }/${e.getFullYear()}`,
              }))
            )
          }
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            className="input-create"
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
            className="input-create"
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
            styleString="select-create"
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
            className="input-create"
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
          styleString="select-create"
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
