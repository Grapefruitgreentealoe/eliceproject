
import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserInfo from "./components/UserInfo";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <UserInfo />
        </Route></Switch>
    </Router>

  );

}

export default App;
