import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {Product} from "../../interfaces/products";

// export const setupPagination = createAction('[PAGINATION] setup pagination');
// export const updatePage = createAction('[PAGINATION] update page');

export interface CatalogState {
  catalogProducts: Product[];
}

export const initialState: CatalogState = {
  catalogProducts: [
    {
      name: 'iPhone',
      price: 200,
      customerRating: 5,
      picture: 'phone',
      type: 'phones',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac pharetra purus. ' +
        'Aenean sed aliquet ante. Quisque volutpat convallis ipsum.',
      reviews: [],
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20
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
      id: 21
    },
  ],
}

export const catalogReducer = createReducer(
  initialState,
);

export const featureSelector = createFeatureSelector<CatalogState>('catalog');
export const catalogProductsSelector = createSelector(
  featureSelector,
  state => state.catalogProducts
);
