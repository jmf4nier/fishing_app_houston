import { FETCH_LAKES, CURRENT_LAKE, FAVORITED_LAKE } from "../actions/types";

const initialState = {
	lakes: [],
	currentLake: {},
	favoritedLakes: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_LAKES:
			return {
				...state,
				lakes: action.payload
			};
		case CURRENT_LAKE:
			return {
				...state,
				currentLake: action.payload
			};
		case FAVORITED_LAKE:
			// I think i understand this now. you are assigning a value, in this case a lake name, a value of true if it isnt already in the object.  if its in the object such as

			// flags ={'buffalo run': true} it will return false to the filter and filter said lake out.
			const newState = [...state.favoritedLakes, action.payload];
			const flags = {};
			const newLakes = newState.filter(function(lake) {
				if (flags[lake.name]) {
					return false;
				}
				flags[lake.name] = true;
				return true;
			});

			return {
				...state,
				favoritedLakes: newLakes
			};
		default:
			return state;
	}
}
