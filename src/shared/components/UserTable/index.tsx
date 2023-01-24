import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../DataTable";

const columns = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "firstName",
    headerName: "Aluno",
    width: 250,
  },
  {
    field: "lastName",
    headerName: "Curso",
    width: 150,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
];

export default function UserTable() {
//   return <DataTable rows={rows} columns={columns} />;
  return <DataTable />;
}
