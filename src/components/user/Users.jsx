import DataTable from "../table/DataTable";

function Users() {
  const rows = [
    {
      id: 1,
      username: "mma",
      joinDate: Date.now(),
      status: "active",
    },
    { id: 2, username: "mma", joinDate: Date.now(), status: "inactive" },
    { id: 3, username: "mma", joinDate: Date.now(), status: "active" },
    { id: 4, username: "mma", joinDate: Date.now(), status: "active" },
    { id: 5, username: "mma", joinDate: Date.now(), status: "suspended" },
  ];

  return (
    <div className="users">
      <DataTable rows={rows} type="users" title="users" />
    </div>
  );
}

export default Users;
