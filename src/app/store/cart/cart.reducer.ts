import {AddProduct, CART_ACTION} from "./cart.action";

const initialState = {
  cartProducts: [
    {
      name: 'iPhone',
      price: 200,
      customerRating: 5,
      picture: 'phone',
      type: 'phones',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
    },
  ],
}

export function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case CART_ACTION.ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload]
      }
    default:
      return state
  }
}
