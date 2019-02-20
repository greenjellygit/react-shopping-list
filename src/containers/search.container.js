import React, {Component} from "react";
import SearchFormComponent from "../components/search-form.component";
import ShoppingListComponent from "../components/shopping-list.component";
import {clients} from "../clients";
import {getAllItems, getTotalItems} from "../allegro-api.utils";

export class SearchContainer extends Component {

  constructor() {
    super();
    this.state = {
      shoppingItemList: [],
      itemsList: [],
      totalElements: 0
    }
  }

  hadleFormSubmit = (e, itemName) => {
    e.preventDefault();

    clients.allegroApi.client.get('/offers/listing', {
      params: {
        phrase: itemName
      }
    }).then(({data}) => {
      this.setState({
        itemsList: getAllItems(data),
        totalElements: getTotalItems(data)
      })
    });
  };

  handleItemClick = (item) => {
    if (this.state.shoppingItemList.map(e => e.id).includes(item.id)) {
      this.handleRemoveItem(item);
      return;
    }
    this.setState({
      shoppingItemList: [item, ...this.state.shoppingItemList]
    });
  };

  handleRemoveItem = (item) => {
    const selectedItemIndex = this.state.shoppingItemList.findIndex(e => e.id === item.id);
    const items = [...this.state.shoppingItemList];
    items.splice(selectedItemIndex, 1);
    this.setState({
      shoppingItemList: items
    });
  };

  render() {
    return (
      <div>
        <ShoppingListComponent itemsList={this.state.shoppingItemList} handleItemClick={this.handleRemoveItem}/>
        <div className='search-container-header'>
          <h1>Find what you want!</h1>
        </div>
        <SearchFormComponent handleItemClick={this.handleItemClick}
                             hadleFormSubmit={this.hadleFormSubmit}
                             itemsList={this.state.itemsList}
                             totalElements={this.state.totalElements}/>
      </div>
    );
  }
}