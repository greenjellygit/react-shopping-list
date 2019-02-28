import React, {Component} from "react";
import SearchForm from "../components/search-form";

export class SearchPage extends Component {

  render() {
    return (
      <div>
        <div className='search-container-header'>
          <h1>Find what you want!</h1>
        </div>
        <SearchForm/>
      </div>
    );
  }
}