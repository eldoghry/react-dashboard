import DataTable from "../table/DataTable";

function Users() {
  const rows = [
    {
      id: 1,
      username: "Ahmed Mohamed",
      joinDate: "22 Apr 2022",
      status: "active",
    },
    {
      id: 2,
      username: "Davied Wagih",
      joinDate: "22 Jun 2022",
      status: "inactive",
    },
    {
      id: 3,
      username: "Nour Midan",
      joinDate: "29 Mar 2022",
      status: "active",
    },
    {
      id: 4,
      username: "Mohamed Magdy",
      joinDate: "01 Jan 2022",
      status: "active",
    },
    { id: 5, username: "mma", joinDate: "22 Jun 2022", status: "suspended" },
  ];

  return (
    <div className="users">
      <DataTable rows={rows} type="users" title="users" />
    </div>
  );
}

export default Users;
