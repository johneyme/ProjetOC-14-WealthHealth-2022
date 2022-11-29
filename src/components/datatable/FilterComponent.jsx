import styled from 'styled-components';

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }
`;

function FilterComponent({ filterText, onFilter }) {
  return (
    <>
      <TextField
        id="search"
        type="text"
        placeholder="Filter by Lastname or Firstname"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />
    </>
  );
}

export default FilterComponent;
