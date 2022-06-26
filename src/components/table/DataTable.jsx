import "./dataTable.scss";
import { DataGrid } from "@material-ui/data-grid";
import VisibilityIcon from "@material-ui/icons/Visibility";

function DataTable({ rows, columns }) {
  return (
    <div className="datatable">
      <h1 className="title">users</h1>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        autoHeight={true}
        // getCellClassName={(params) => console.log(params)}
      />
    </div>
  );
}

export default DataTable;
