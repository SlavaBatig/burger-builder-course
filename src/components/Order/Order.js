import React from 'react';

import classes from './Order.css';

const order = props => {
  const ingredients = [];

  for (let ingrName in props.ingredients) {
    ingredients.push({ name: ingrName, amount: props.ingredients[ingrName] });
  }

  const ingrOutput = ingredients.map(ig => (
    <span
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px'
      }}
      key={ig.name}
    >
      {ig.name} ({ig.amount})
    </span>
  ));
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingrOutput}</p>
      <p>
        Price: <strong>{props.price.toFixed(2)}$</strong>
      </p>
    </div>
  );
};

export default order;
