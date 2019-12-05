import Constants from '../constants'

function updateFilterText(text: string){
    return {
        type: Constants.UPDATE_SEARCH_TEXT,
        payload: text
    }
}

const filterActions = {
  updateFilterText: updateFilterText
}
export default filterActions;
