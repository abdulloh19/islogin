import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./counter";
import TableArmiya from "./table-armiya";
import Arr from "./arr";
import Secondamer from "./sekondamer";
import Timer from "./timer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <TableArmiya /> */}
    {/* <Arr /> */}
    {/* <Secondamer />   */}
    <Timer />
  </React.StrictMode>
);
