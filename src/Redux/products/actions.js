import store from "./../store"
import { SET_FILTER, SET_SORT, SET_PRODUCTS, SET_SINGLEPRODUCT, ADD_2_CART, ADD_2_WISHLIST, cartButtonCliked, cart_Button_Cliked } from "./actionTypes"

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
export const add2CartAction = (cart) => ({

    type: ADD_2_CART,
    cart: cart,

})
export const add2WishListAction = (wishlist) => ({

    type: ADD_2_WISHLIST,
    wishlist: wishlist,

})

export const cartButtonClick_Action = (id, cartCliked) => ({

    type: cart_Button_Cliked,
    cartCliked: { id, cartCliked }

})

