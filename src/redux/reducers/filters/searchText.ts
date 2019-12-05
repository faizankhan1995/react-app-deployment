import Constants from '../../constants'

export default function searchText(state: any ="", action: any) {

	switch (action.type) {
		case Constants.UPDATE_SEARCH_TEXT:
			return action.payload
		default:
			return state;
	}
}
