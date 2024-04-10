import React from "react";
import { Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import userData from "../config/Data.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserListScreen = () => {
  const columns = [
    { name: "name", options: { filter: true } },
    { name: "age", options: { filter: true } },
    { name: "country", options: { filter: true } },
    { name: "city", options: { filter: true } },
    { name: "number_of_places", options: { filter: true } },
    {
      name: "location",
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            // pass the value inside href
            <Link to={`/map/${value}`}>See the current location</Link>
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "checkbox",
    responsive: "",
  };

  return (
    <div>
      <MUIDataTable
        title={"User traveling places list"}
        data={userData.users}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default UserListScreen;
