import DataTable from 'react-data-table-component';
import { columns } from './config.datatable';

function DataTableComponent({ data }) {
  return <DataTable columns={columns} data={data} />;
}

export default DataTableComponent;
