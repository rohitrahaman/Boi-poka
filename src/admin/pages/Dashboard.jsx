import React from "react";

import DataTable from "../components/DataTable";
import Model from "../components/Model";
import AddbookForm from "../components/AddbookForm";

function Dashboard() {
  return (
    <div>
      <Model>
        <AddbookForm />
      </Model>
      <DataTable />
    </div>
  );
}

export default Dashboard;
