import {createReducer, on} from "@ngrx/store";
import {clearSnackbarText, setSnackbarText} from "../actions/notifications";

export interface NotificationsState {
  snackbarText: string,
}

export const initialState: NotificationsState = {
  snackbarText: '',
}

export const notificationsReducer = createReducer(
  initialState,
  on(setSnackbarText, (state, {snackbarText}) => ({
    ...state,
    snackbarText
  })),
  on(clearSnackbarText, (state) => ({
    ...state,
    snackbarText: ''
  })),
);

