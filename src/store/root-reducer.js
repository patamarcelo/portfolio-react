import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { systemReducer } from "./system/system.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	system: systemReducer
});
