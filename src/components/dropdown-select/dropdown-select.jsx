import './dropdown-select.css';

/**
 * Dropdown to state list or departement list
 *
 * @param {string} name - name of the entire dropdown
 * @param {string} id - id to identify dropdown
 * @param {array} array - array with dropdown content
 * @param {boolean} stateData - boolean to know if stateData or no
 * @param {function} change - arrow function to push target in variable
 * @param {string} styleString - string to apply class on component
 * @returns
 */

function DropdownSelect({ name, id, array, stateData, change, styleString }) {
  if (stateData === true) {
    return (
      <select className={styleString} name={name} id={id} onChange={change}>
        {array.map((elm) => (
          <option key={`${id}-${elm.abbreviation}`} value={elm.abbreviation}>
            {elm.name}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <select className={styleString} name={name} id={id} onChange={change}>
        {array.map((elm) => (
          <option key={`${id}-${elm}`}>{elm}</option>
        ))}
      </select>
    );
  }
}

export default DropdownSelect;
