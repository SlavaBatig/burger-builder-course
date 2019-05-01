import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])]
                .map((_, i) => {
                    return <BurgerIngredient
                    key={ingrKey + i}
                    type={ingrKey} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if (!transformedIngredients.length) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;