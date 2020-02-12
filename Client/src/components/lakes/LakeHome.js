import React, { useState, useEffect } from "react";
import LakeCards from "./LakeCards";
import { Grid } from "@material-ui/core";
import { FETCH_LAKES } from "../actions/types";
import { useDispatch } from "react-redux";

const Home = props => {
	const [lakes, setLakes] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		async function fetchData() {
			await fetch("https://jasonserverhoustonfishing.herokuapp.com/lakes")
				.then(res => res.json())
				.then(result => {
					dispatch({ type: FETCH_LAKES, payload: result });
					setLakes(result);
				});
		}
		fetchData();
	}, []);
	return (
		<div>
			<Grid container direction="row" justify="center" alignItems="center">
				{lakes.map(lake => {
					return <LakeCards key={lake._id} lake={lake} />;
				})}
			</Grid>
		</div>
	);
};
export default Home;
