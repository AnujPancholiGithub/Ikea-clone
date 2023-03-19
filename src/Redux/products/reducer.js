import { SET_FILTER, SET_PRODUCTS, SET_SORT, SET_SINGLEPRODUCT, ADD_2_CART, ADD_2_WISHLIST, cart_Button_Cliked } from "./actionTypes";
import products from "./../../Components/JsonFiles/elctroCo.json"
import { act } from "react-dom/test-utils";

const initialState = {
    filter: '',
    sort: 'priceAsc',
    productsData: [{
        title: "initial state title",
        brand: "SYMFONISK",
        price: "9900",
        priceShow: "Rs.9,900",
        size: "large",
        material: "wood",
        description: "All SYMFONISK speakers connect over WiFi so you can create the system you want in your home. Play a podcast in the bedroom while someone else listens to music in the living room, or group all your speakers to play music in sync.Available with a white or black frame and with different interchangeable fronts, so you can choose the style that suits you and your home.",
        images: []
    }],
    element: {},
    cart: JSON.parse(localStorage.getItem("CartData")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    cartCliked: JSON.parse(localStorage.getItem("cartClicked")) || [],
};
function reducer(state = initialState, action) {

    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter,
            };
        case SET_SORT:
            return {
                ...state,
                sort: action.sort,
            };
        case SET_PRODUCTS:
            return {
                ...state,
                productsData: action.products,
            }
        case SET_SINGLEPRODUCT:
            return {
                ...state,
                element: action.element
            }
        case ADD_2_CART:
            localStorage.setItem("CartData", JSON.stringify([...state.cart, action.cart]));
            return {
                ...state,
                cart: [...state.cart, action.cart]
            }
        case ADD_2_WISHLIST:
            localStorage.setItem("wishlist", JSON.stringify([...state.wishlist, action.wishlist]));
            return {
                ...state,
                wishlist: [...state.wishlist, action.wishlist]
            }
        case cart_Button_Cliked:
            localStorage.setItem("cartCliked", JSON.stringify([...state.cartCliked, action.cartCliked]));
            return {
                ...state,
                cartCliked: [...state.cartCliked, action.cartCliked]
            }
        default:
            return state;
    }
}

export default reducer;