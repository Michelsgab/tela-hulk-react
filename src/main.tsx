import { CssBaseline } from '@mui/material'
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "../routes";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <AppRouter />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);
