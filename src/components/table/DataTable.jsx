import "./dataTable.scss";
import { DataGrid } from "@material-ui/data-grid";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";

function DataTable({ rows, type, title, pageSize }) {
  let columns;

  switch (type) {
    case "users":
      columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "username",
          headerName: "username",
          width: 150,
          type: "text",
          minWidth: 100,
          flex: 1,
          // align: "center",
        },
        {
          type: "date",
          field: "joinDate",
          headerName: "Join Date",
          width: 150,
          editable: false,
          minWidth: 100,
          flex: 1,
        },
        {
          field: "status",
          headerName: "Status",
          type: "text",
          width: 110,
          align: "left",
          editable: false,
          minWidth: 100,
          flex: 1,

          renderCell: (params) => {
            return (
              <span className={`status ${params.value}`}>{params.value}</span>
            );
          },
        },

        {
          field: "actions",
          headerName: "Actions",
          width: 130,
          editable: false,
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            // console.log(params);

            return (
              <div className="actions">
                <Link to={`${params.id}`} className="btn view">
                  view
                </Link>
              </div>
            );
          },
        },
      ];
      break;

    //{ id: 1, createdAt: Date.now(), username: "mma", status: "pending" },
    case "orders":
      columns = [
        { field: "id", headerName: "ID", width: 90, flex: 1 },
        {
          field: "createdAt",
          headerName: "createdAt",
          width: 150,
          type: "date",
          minWidth: 100,
          flex: 1,
        },
        {
          type: "text",
          field: "username",
          headerName: "username",
          width: 150,
          minWidth: 100,
          flex: 1,
        },
        {
          field: "status",
          headerName: "Status",
          type: "text",
          width: 110,
          align: "left",
          minWidth: 100,
          flex: 1,

          renderCell: (params) => {
            return (
              <span className={`status ${params.value}`}>{params.value}</span>
            );
          },
        },

        {
          field: "actions",
          headerName: "Actions",
          width: 130,
          editable: false,
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            // console.log(params);

            return (
              <div className="actions">
                <Link to={`${params.id}`} className="btn view">
                  view
                </Link>

                <Button>
                  <DeleteIcon className="icon" />
                </Button>
              </div>
            );
          },
        },
      ];

      break;

    case "products":
      columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "username",
          headerName: "username",
          width: 150,
          type: "text",
          minWidth: 100,
          flex: 1,
          // align: "center",
        },
        {
          type: "date",
          field: "joinDate",
          headerName: "Join Date",
          width: 150,
          editable: false,
          minWidth: 100,
          flex: 1,
        },
        {
          field: "status",
          headerName: "Status",
          type: "text",
          width: 110,
          align: "left",
          editable: false,
          minWidth: 100,
          flex: 1,

          renderCell: (params) => {
            return (
              <span className={`status ${params.value}`}>{params.value}</span>
            );
          },
        },

        {
          field: "actions",
          headerName: "Actions",
          width: 130,
          editable: false,
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            // console.log(params);

            return (
              <div className="actions">
                <Link to={`${params.id}`} className="btn view">
                  view
                </Link>
              </div>
            );
          },
        },
      ];

      break;

    case "transactions":
      columns = [
        { field: "id", headerName: "ID", width: 90, flex: 1 },
        {
          field: "createdAt",
          headerName: "Created At",
          type: "date",
          minWidth: 100,
          flex: 1,
        },
        {
          type: "number",
          field: "total",
          headerName: "Total",
          minWidth: 100,
          flex: 1,
        },
        {
          type: "number",
          field: "count",
          headerName: "Product Count",
          minWidth: 100,
          flex: 1,
          // align: "center",
        },
        {
          field: "status",
          headerName: "Order Status",
          type: "text",
          // align: "left",
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            return (
              <span className={`status ${params.value}`}>{params.value}</span>
            );
          },
        },

        {
          field: "actions",
          headerName: "Actions",
          width: 130,
          editable: false,
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            // console.log(params);

            return (
              <div className="actions">
                <Link
                  to={{ pathname: `/orders/${params.id}` }}
                  className="btn view"
                >
                  view
                </Link>
              </div>
            );
          },
        },
      ];

      break;
    default:
      break;
  }

  return (
    <div className="datatable">
      <h1 className="title">{title}</h1>
      <form action="" className="search" onSubmit={() => {}}>
        <input type="text" placeholder="Search ... " />
        <Search className="icon" />
      </form>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize || 5}
        checkboxSelection
        disableSelectionOnClick
        autoHeight={true}
        // getCellClassName={(params) => console.log(params)}
      />
    </div>
  );
}

export default DataTable;
