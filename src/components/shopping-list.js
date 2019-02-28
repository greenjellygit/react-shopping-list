import React from "react";
import Item from "./item";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {getItemImageUrl, getItemPice, sumItems} from "../allegro-api.utils";
import {removeFromShoppingList} from "../actions/search.action";
import {connect} from "react-redux";

let ShoppingList = ({selectedItems, handleItemClick}) => {
  return (
    <div className='shopping-list-container'>
      <h4 className='shopping-list-title'>Sum of items: {sumItems(selectedItems)} zl</h4>
      <TransitionGroup className='shopping-list'>
        {selectedItems.map((item) => (
          <CSSTransition key={item.id} timeout={300} classNames="fade">
            <Item key={item.id} name={item.name} price={getItemPice(item)} imageUrl={getItemImageUrl(item)} item={item} handleItemClick={handleItemClick}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
};

const mapStateToProps = (state) => ({
  selectedItems: state.search.selectedItems
});

const mapDispatchToProps = {
  handleItemClick: removeFromShoppingList
};

ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

export default ShoppingList;