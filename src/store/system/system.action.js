import { SYSTEM_ACTIONS_TYPES } from "./system.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsLoading = (boolean) => {
	return createAction(SYSTEM_ACTIONS_TYPES.SET_LOADING_SYSTEM, boolean);
};

