import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./admin/Layouts/Index.jsx";
import Dashboard from "./admin/pages/Dashboard.jsx";
import Customers from "./admin/pages/Customers.jsx";
import Allreports from "./admin/pages/Allreports.jsx";
import Conversations from "./admin/pages/Conversations.jsx";
import Deals from "./admin/pages/Deals.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./Store/Store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="allreports" element={<Allreports />} />
            <Route path="conversations" element={<Conversations />} />
            <Route path="deals" element={<Deals />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
