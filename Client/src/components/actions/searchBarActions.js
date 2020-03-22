import {SET_SEARCH_PARAMS, SET_LOCATION_FILTER, SET_SPECIES_FILTER} from './types'

export const setSearchParams = (dispatch, value) =>{
    dispatch({
        type: SET_SEARCH_PARAMS,
        payload: value
    })
}
export const speciesFilter = (dispatch, value) =>{
    dispatch({
        type: SET_SPECIES_FILTER,
        payload: value
    })
}
export const locationFilter = (dispatch, value) =>{
    dispatch({
        type: SET_LOCATION_FILTER,
        payload: value
    })
}
