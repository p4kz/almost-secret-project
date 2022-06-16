import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/global";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      {/* <Switch></Switch> */}
    </Router>
  )
}
