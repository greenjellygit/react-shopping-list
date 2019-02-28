import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {AuthorizationPage} from "./containers/authorization-page";
import SearchPage from "./containers/search-page";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={AuthorizationPage}/>
          <Route path='/search' component={SearchPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
