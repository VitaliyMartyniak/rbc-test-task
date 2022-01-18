import {Action} from "@ngrx/store";

const initialState = {
  products: [
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
    {
      name: 'Samsung',
      price: 800,
      customerRating: 4,
      picture: 'tv',
      type: 'TVs',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
    },
    {
      name: 'Samsung',
      price: 800,
      customerRating: 4,
      picture: 'tv',
      type: 'TVs',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
    },
    {
      name: 'Samsung',
      price: 800,
      customerRating: 4,
      picture: 'tv',
      type: 'TVs',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
    },
    {
      name: 'Bosch Fridge',
      price: 1000,
      customerRating: 3,
      picture: 'appliance',
      type: 'appliances',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
    },
    {
      name: 'Bosch Fridge',
      price: 1000,
      customerRating: 3,
      picture: 'appliance',
      type: 'appliances',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
    },
    {
      name: 'Bosch Fridge',
      price: 1000,
      customerRating: 3,
      picture: 'appliance',
      type: 'appliances',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
    },
    {
      name: 'DOOM',
      price: 60,
      customerRating: 5,
      picture: 'game',
      type: 'games',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
    },
  ]
}

export function catalogReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state
  }
}
