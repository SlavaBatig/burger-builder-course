import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, data) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: data
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = data => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', data)
      .then(res => {
        dispatch(purchaseBurgerSuccess(res.data.name, data));
      })
      .catch(err => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDER_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDER_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get('orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
