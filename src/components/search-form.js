import React, {Component} from "react";
import Item from "./item";
import {getItemImageUrl, getItemPice} from "../allegro-api.utils";

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
    })
  };

  render() {
    return (
      <div className='search-form-container'>
        <form onSubmit={(e) => this.props.hadleFormSubmit(e, this.state.itemName)}>
          <input type='text' placeholder='Type offer name' onChange={this.handleInputChange}/>
          <button type='submit'>Search</button>
        </form>
        <div className='search-form-item-list'>
          {this.props.itemsList.map((item) => (
            <Item key={item.id} name={item.name} price={getItemPice(item)} imageUrl={getItemImageUrl(item)}
                  item={item} handleItemClick={this.props.handleItemClick}/>
          ))}
        </div>
      </div>
    )
  }
}

export default SearchForm;