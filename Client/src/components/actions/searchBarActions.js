import {SET_SEARCH_PARAMS} from './types'

export const setSearchParams = (dispatch, value) =>{
    dispatch({
        type: SET_SEARCH_PARAMS,
        payload: value
    })
}