import appReducer from './reducers'
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = (store:any) => (next:any) => (action:any) => {

	let result;

	console.groupCollapsed(`dispatching action => ${action.type}`);
	console.log('selected album:', store.getState().selectedAlbum);
	result = next(action);

	let { selectedAlbum } = store.getState();

	console.log(`
		selected album: ${selectedAlbum}
	`);

	console.groupEnd();

	return result;

}

export default () => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer)
}



