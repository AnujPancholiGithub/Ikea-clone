import store from "./../store"
import { SET_FILTER, SET_SORT, SET_PRODUCTS, SET_SINGLEPRODUCT } from "./actionTypes"

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products,
});

export const filterAction = (filter) => {

    return {
        type: SET_FILTER,
        filter,
    }

}

export const sortAction = (sort) => ({

    type: SET_SORT,
    sort,

});

export const singleProductAction = (setOne) => ({

    type: SET_SINGLEPRODUCT,
    element: setOne,

})