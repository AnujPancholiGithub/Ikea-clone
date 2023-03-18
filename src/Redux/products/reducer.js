import { SET_FILTER, SET_PRODUCTS, SET_SORT, SET_SINGLEPRODUCT } from "./actionTypes";
import products from "./../../Components/JsonFiles/elctroCo.json"

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
    element: {}
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
        default:
            return state;
    }
}

export default reducer;