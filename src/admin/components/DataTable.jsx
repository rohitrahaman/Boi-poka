import React from "react";
import Datatab from "./Datatab";
import Datatabhead from "./Datatabhead";
import { useSelector } from "react-redux";

function DataTable() {
  const { filteredbooks } = useSelector((state) => state.book);
  return (
    <div>
      <Datatabhead />
      <Datatab book={filteredbooks} />
    </div>
  );
}

export default DataTable;
