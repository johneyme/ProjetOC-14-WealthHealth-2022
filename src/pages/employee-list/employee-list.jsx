import './employee-list.css';
import DataTableComponent from '../../components/datatable/datable';

const employees = JSON.parse(localStorage.getItem('employees'));

function EmployeeList() {
  return (
    <section>
      <button onClick={() => window.location.reload(false)}>
        Actualiser la page
      </button>
      <DataTableComponent data={employees} />
    </section>
  );
}

export default EmployeeList;
