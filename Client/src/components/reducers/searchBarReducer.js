import {SET_SEARCH_PARAMS} from '../actions/types'

const initialState = {
    searchParams: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCH_PARAMS:
        return {
          searchParams: action.payload
        };
      default:
        return state;
    }
  }