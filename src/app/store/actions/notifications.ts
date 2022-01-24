import {createAction, props} from "@ngrx/store";

export const setSnackbarText = createAction('[NOTIFICATIONS] set snackbar text',
  props<{snackbarText: string}>()
);
export const clearSnackbarText = createAction('[NOTIFICATIONS] clear snackbar text');

