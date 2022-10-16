import { USER_ACTIONS_TYPES } from "./user.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsAuthUser = boolean => {
	return createAction(USER_ACTIONS_TYPES.SET_AUTH_USER, boolean);
};

export const setUser = user => {
	return createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
};
