import './create-employee.css';
import { states } from '../../data/states';
import { departments } from '../../data/department';
import DropdownSelect from '../../components/dropdown-select/dropdown-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

function CreateEmployee() {
  const [startDate, setStartDate] = useState(new Date());
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

      <button>Save</button>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </section>
  );
}

export default CreateEmployee;
