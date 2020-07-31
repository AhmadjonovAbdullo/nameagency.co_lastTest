import React from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import homePage from "./component/homePage";
import Default from "./component/Default";

function App() {
  return (
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={homePage}/>
            <Route component={Default}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
