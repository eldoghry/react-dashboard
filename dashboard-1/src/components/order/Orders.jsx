import DataTable from "../table/DataTable";

function Orders() {
  const rows = [
    { id: 1, createdAt: Date.now(), username: "mma", status: "pending" },
    { id: 2, createdAt: Date.now(), username: "mma", status: "pending" },
    { id: 3, createdAt: Date.now(), username: "mma", status: "processing" },
    { id: 4, createdAt: Date.now(), username: "mma", status: "delivered" },
    { id: 5, createdAt: Date.now(), username: "mma", status: "away" },
    { id: 6, createdAt: Date.now(), username: "mma", status: "canceled" },
    { id: 7, createdAt: Date.now(), username: "mma", status: "review" },
    { id: 8, createdAt: Date.now(), username: "mma", status: "processing" },
    { id: 9, createdAt: Date.now(), username: "mma", status: "pending" },
    { id: 10, createdAt: Date.now(), username: "mma", status: "delivered" },
  ];

  //pending, review, delivered, processing, away, canceled, progess
  return (
    <div className="orders">
      <DataTable rows={rows} type="orders" title="orders" pageSize={25} />
    </div>
  );
}

export default Orders;
