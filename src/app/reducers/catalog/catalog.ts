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
  ],
}

export const catalogReducer = createReducer(
  initialState,
  // on(setupPagination, state => ({
  //   ...state
  // })),
  // on(updatePage, state => ({
  //   ...state,
  //   pageIndex: 1
  // }))
);

export const featureSelector = createFeatureSelector<CatalogState>('catalog');
export const catalogProductsSelector = createSelector(
  featureSelector,
  state => state.catalogProducts
);
