import './dropdown-select.css';

function DropdownSelect({ name, id, array, stateData, change }) {
  if (stateData === true) {
    return (
      <select name={name} id={id} onChange={change}>
        {array.map((elm) => (
          <option key={`${id}-${elm.abbreviation}`} value={elm.abbreviation}>
            {elm.name}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <select name={name} id={id} onChange={change}>
        {array.map((elm) => (
          <option key={`${id}-${elm}`}>{elm}</option>
        ))}
      </select>
    );
  }
}

export default DropdownSelect;
