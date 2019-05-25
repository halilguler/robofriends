import {CHANGE_SEARCH_FIELD} from '../constants/'
export const searchField = (test)=>({
    type:CHANGE_SEARCH_FIELD,
    payload:test
});
