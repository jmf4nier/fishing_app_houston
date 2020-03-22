import {SET_SEARCH_PARAMS, SET_SPECIES_FILTER, SET_LOCATION_FILTER} from '../actions/types'

const initialState = {
    searchParams: '',
    speciesFilter: '',
    locationFilter: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCH_PARAMS:
        return {
          ...state,
          searchParams: action.payload
        };
        case SET_SPECIES_FILTER:
        return {
          ...state,
          speciesFilter: action.payload
        };
        case SET_LOCATION_FILTER:
        return {
          ...state,
          locationFilter: action.payload
        };
      default:
        return state;
    }
  }