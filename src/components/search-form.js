import React, {Component} from "react";

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      itemName: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      itemName: e.target.value
    });
    console.log(this.state.itemName);
  };

  handleFormSubmitted = (e) => {
    e.preventDefault();
    console.log('form submitted!')
  };

  render() {
    return (
      <div className='search-form-container' onSubmit={this.handleFormSubmitted}>
        <form>
          <input type='text' placeholder='Type offer name' onChange={this.handleInputChange}/>
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
