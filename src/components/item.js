import React from "react";
import PropTypes from 'prop-types'

const Item = ({name, price, imageUrl, item, handleItemClick}) => {
  return (
    <div className='item-container' style={{backgroundImage: `url('${imageUrl}')`}} onClick={() => handleItemClick(item)}>
      <div className='item-description'>{name}</div>
      <div className='item-description'>{price} zł</div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  imageUrl: PropTypes.string,
  handleItemClick: PropTypes.func
};

Item.defaultProps = {
  handleItemClick: () => {
    console.log('item clicked')
  }
};

export default Item;