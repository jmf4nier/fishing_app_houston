import React, { useEffect } from "react";

import LakeCards from "./LakeCards";
import { Grid } from "@material-ui/core";
import { fetchLakes } from "../actions/lakeActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchLakes(dispatch);
	}, [dispatch]);
	const lakes = useSelector(state => state.lakeReducer.lakes);
	const search = useSelector(state => state.searchBarReducer.searchParams);
	const speciesFilter = useSelector(
		state => state.searchBarReducer.speciesFilter
	);
	const locationFilter = useSelector(
		state => state.searchBarReducer.locationFilter
	);
	// species filter
	const filterOne = lakes.filter(lake => {
		if (speciesFilter !== "all") {
			return lake.species.includes(speciesFilter);
		} else return true;
	});
	// second layer filter for location
	const filterTwo = filterOne.filter(lake => {
		if (locationFilter !== "all") {
			return lake.locality.includes(locationFilter);
		} else return true;
		;
	});
	//third layer filter by
	const searchFilteredCards = filterTwo.filter(lake => {
		const { name } = lake;
		let searchTerm = search.toLowerCase();
		let lowerCaseName = name.toLowerCase();
		return lowerCaseName.includes(searchTerm);
	});

	return (
		<div>
			<Grid container direction="row" justify="center" alignItems="center">
				{(searchFilteredCards.length === 0)? <h1 style={{marginTop:'5rem'}}>Nothing Found for Those Search Criteria</h1>:searchFilteredCards.map(lake => {
					return <LakeCards key={lake._id} lake={lake} />;
				})}
			</Grid>
		</div>
	);
};
export default Home;
