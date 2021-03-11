import { combineReducers } from "redux";

import posts from "./posts.reducer";
import authReducer from "./auth.reducer";

const reducers = combineReducers({ posts, authReducer });

export default reducers;
