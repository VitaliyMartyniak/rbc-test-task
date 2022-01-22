import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export interface NotificationsState {
  snackbarText: string,
}

export const initialState: NotificationsState = {
  snackbarText: '',
}

export const setSnackbarText = createAction('[NOTIFICATIONS] set snackbar text',
  props<{text: string}>()
);
export const clearSnackbarText = createAction('[NOTIFICATIONS] clear snackbar text');

export const notificationsReducer = createReducer(
  initialState,
  on(setSnackbarText, (state, {text}) => ({
    ...state,
    snackbarText: text
  })),
  on(clearSnackbarText, (state) => ({
    ...state,
    snackbarText: ''
  })),
);

export const featureSelector = createFeatureSelector<NotificationsState>('notifications');
export const snackbarTextSelector = createSelector(
  featureSelector,
  state => state.snackbarText
);

