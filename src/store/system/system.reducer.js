import { SYSTEM_ACTIONS_TYPES } from "./system.types";

export const INITIAL_SYSTEM_STATE = {
	isLoading: false,
};

export const systemReducer = (state = INITIAL_SYSTEM_STATE, action = {}) => {
	process.env.NODE_ENV !== "production" && console.log("dispatch");
	process.env.NODE_ENV !== "production" && console.log(action);
	const { type, payload } = action;
	switch (type) {
		case SYSTEM_ACTIONS_TYPES.SET_LOADING_SYSTEM:
			return {
				...state,
				isLoading: payload
			};
		default:
			return state;
	}
};
