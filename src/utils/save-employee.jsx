function saveEmployee() {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const employee = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    dateOfBirth: document.getElementById('date-of-birth').value,
    startDate: document.getElementById('start-date').value,
    department: document.getElementById('department').value,
    street: document.getElementById('street').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    zipCode: document.getElementById('zip-code').value,
  };
  employees.push(employee);
  localStorage.setItem('employees', JSON.stringify(employees));
}

export default saveEmployee;

/**
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
  const [listEmployees, setListEmployees] = useState([]);

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
  
  */
