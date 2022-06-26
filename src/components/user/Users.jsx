import DataTable from "../table/DataTable";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

function Users() {
  const columns = [
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
        return <span className={`status ${params.value}`}>{params.value}</span>;
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

            <DeleteIcon className="icon" />
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "mma",
      joinDate: Date.now().toString(),
      status: "active",
    },
    { id: 2, username: "mma", joinDate: Date.now(), status: "inactive" },
    { id: 3, username: "mma", joinDate: Date.now(), status: "active" },
    { id: 4, username: "mma", joinDate: Date.now(), status: "active" },
    { id: 5, username: "mma", joinDate: Date.now(), status: "suspended" },
    { id: 6, username: "mma", joinDate: Date.now(), status: "active" },
    { id: 7, username: "mma", joinDate: Date.now(), status: "suspended" },
  ];

  return (
    <div className="users">
      <DataTable rows={rows} columns={columns} />
    </div>
  );
}

export default Users;
