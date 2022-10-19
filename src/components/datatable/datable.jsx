import DataTable from 'react-data-table-component';
import { columns } from './config.datatable';

const data = [
  {
    id: 1,
    firstName: 'Jean',
    lastName: 'Duc',
    startDate: '10/10/2010',
    department: 'Marketing',
    dateOfBirth: '01/01/1990',
    street: '12 three street',
    city: 'New York',
    state: 'New York',
    zipCode: '123456',
  },
  {
    id: 2,
    firstName: 'Mélanie',
    lastName: 'Clap',
    startDate: '20/12/2020',
    department: 'I.T',
    dateOfBirth: '05/05/1995',
    street: '13 sky street',
    city: 'Miami',
    state: 'California',
    zipCode: '654321',
  },
];

function DataTableComponent() {
  return <DataTable columns={columns} data={data} />;
}

export default DataTableComponent;
