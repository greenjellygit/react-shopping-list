import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {AuthorizationConatiner} from "./containers/authorization.container";
import {SearchContainer} from "./containers/search.container";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={AuthorizationConatiner}/>
          <Route path='/search' component={SearchContainer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
