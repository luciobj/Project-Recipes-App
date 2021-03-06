import React from 'react';
import PropTypes from 'prop-types';

function FavoriteFilters(props) {
  const { text, onClick } = props;
  const types = ({
    Todos: 'filter-by-all-btn',
    Comidas: 'filter-by-food-btn',
    Bebidas: 'filter-by-drink-btn',
  });
  const testidText = types[text];
  return (
    <button
      type="button"
      onClick={ onClick }
      name={ text }
      data-testid={ testidText }
    >
      { text }
    </button>
  );
}

export default FavoriteFilters;

FavoriteFilters.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;
