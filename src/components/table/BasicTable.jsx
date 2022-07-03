import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./basicTable.scss";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(productName, qty, uprice, total) {
  return { productName, qty, uprice, total };
}

const rows = [
  createData("Red Bag", 1, 150, 24),
  createData("Smart watch", 2, 890, 37),
  createData("Iphone Pro", 1, 5780, 24),
  createData("Iron man toy", 3, 99, 67),
  createData("Black Shoes", 1, 16.0, 49),
];

export default function BasicTable({ title }) {
  const classes = useStyles();

  return (
    <div className="basicTable">
      <h1 className="title">{title}</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">QTY</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                {/* <TableCell align="right">{row.productName}</TableCell> */}
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.uprice}</TableCell>
                <TableCell align="right">{row.qty * row.uprice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
