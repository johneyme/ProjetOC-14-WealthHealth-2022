import './dropdown-select.css';

function DropdownSelect({ name, id, array, stateData }) {
  if (stateData === true) {
    return (
      <select name={name} id={id}>
        {array.map((elm) => (
          <option key={`${id}-${elm.abbreviation}`} value={elm.abbreviation}>
            {elm.name}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <select name={name} id={id}>
        {array.map((elm) => (
          <option key={`${id}-${elm}`}>{elm}</option>
        ))}
      </select>
    );
  }
}

export default DropdownSelect;
