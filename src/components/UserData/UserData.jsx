import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
// Icon
import { FaRegCopy } from "react-icons/fa";
// Data
import user_data from "../../user_data.json";

const columns = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 120,
    flex: 1.2,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1.5,
    editable: true,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "gender",
    headerName: "Gender",
    minWidth: 120,
    flex: 1.2,
    editable: true,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    minWidth: 100,
    flex: 1,
    editable: true,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "city",
    headerName: "City",
    minWidth: 100,
    flex: 1,
    editable: true,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "state",
    headerName: "State",
    minWidth: 120,
    flex: 1.2,
    editable: true,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "occupationStatus",
    headerName: "Status",
    minWidth: 120,
    flex: 1.2,
    editable: true,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "occupation",
    headerName: "Occupation",
    minWidth: 160,
    flex: 1.6,
    editable: true,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "actions",
    type: "actions",
    minWidth: 50,
    flex: 0.5,
    getActions: () => [
      <GridActionsCellItem
        // key={index}
        icon={<FaRegCopy />}
        label="Copy"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 10px",
          borderRadius: "5px",
          border: "none",
          ":hover": {
            backgroundColor: "#3e8e41",
            color: "black",
            cursor: "pointer",
          },
        }}
      />,
    ],
  },
];

const rows = user_data;

const UserData = () => {
  return (
    <>
      <div className="h-full w-full">
        {/* <div className="rounded-sm border bg-gray-200 shadow-sm shadow-black w-full h-full overflow-auto"> */}
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 100,
              },
            },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          checkboxSelection={false}
          disableRowSelectionOnClick
        />
        {/* </div> */}
      </div>
    </>
  );
};

export default UserData;
