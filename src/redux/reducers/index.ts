import { combineReducers } from 'redux';
import campaigns from "./campaigns";
import employees from "./employees";
import searchText from "./filters/searchText";

export default combineReducers({
	campaigns,
	employees,
	filters:combineReducers({
		searchText
	})
})