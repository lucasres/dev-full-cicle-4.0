import React from 'react';
import './App.css';
import UserList from "./pages/UserList";
import Home from "./pages/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/users" component={UserList}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
