import DataTable from 'react-data-table-component';
import { columns } from './config.datatable';

/**
 * A react-data-table-component package is using, find config table on ./config.datable.js
 *
 * @param {object} data - object list who contains each employee created
 * @returns
 */

function DataTableComponent({ data }) {
  return <DataTable columns={columns} data={data} />;
}

export default DataTableComponent;
