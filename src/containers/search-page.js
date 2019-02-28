import React, {Component} from "react";
import SearchForm from "../components/search-form";
import ShoppingList from "../components/shopping-list";
import {clients} from "../clients";
import {getAllItems, getTotalItems} from "../allegro-api.utils";
import {connect} from "react-redux";
import {addToShoppingList, removeFromShoppingList} from "../actions/search.action";

class SearchPage extends Component {

  constructor() {
    super();
    this.state = {
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
    if (this.props.selectedItems.map(e => e.id).includes(item.id)) {
      this.props.removeFromShoppingList(item);
      return;
    }
    this.props.addToShoppingList(item);
  };

  render() {
    return (
      <div>
        <ShoppingList/>
        <div className='search-container-header'>
          <h1>Find what you want!</h1>
        </div>
        <SearchForm handleItemClick={this.handleItemClick}
                    hadleFormSubmit={this.hadleFormSubmit}
                    itemsList={this.state.itemsList}
                    totalElements={this.state.totalElements}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedItems: state.search.selectedItems
});

const mapDispatchToProps = {
  addToShoppingList,
  removeFromShoppingList
};

SearchPage = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

export default SearchPage;