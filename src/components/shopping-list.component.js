import React from "react";
import ItemComponent from "./item.component";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {getItemImageUrl, getItemPice, sumItems} from "../allegro-api.utils";

const ShoppingListComponent = ({itemsList, handleItemClick}) => {
  return (
    <div className='shopping-list-container'>
      <h4 className='shopping-list-title'>Sum of items: {sumItems(itemsList)} zl</h4>
      <TransitionGroup className='shopping-list'>
        {itemsList.map((item) => (
          <CSSTransition key={item.id} timeout={300} classNames="fade">
            <ItemComponent key={item.id} name={item.name} price={getItemPice(item)} imageUrl={getItemImageUrl(item)} item={item} handleItemClick={handleItemClick}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
};

export default ShoppingListComponent;