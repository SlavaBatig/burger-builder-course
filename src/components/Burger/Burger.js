import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredient';

const burger = props => {
  console.log('Burger props:', props);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingrKey => {
      return [...Array(props.ingredients[ingrKey])].map((_, i) => {
        return <BurgerIngredients key={ingrKey + i} type={ingrKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type='bread-top' />
      {transformedIngredients}
      <BurgerIngredients type='bread-bottom' />
    </div>
  );
};

export default burger;
