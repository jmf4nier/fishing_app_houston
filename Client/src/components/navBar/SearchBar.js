import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { setSearchParams } from '../actions/searchBarActions'
import {useDispatch} from 'react-redux'

export default function SearchBar(props) {
    const dispatch = useDispatch()
	const { classes } = props;
	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				onChange={e => setSearchParams(dispatch, e.target.value)}
				
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput
				}}
				inputProps={{ "aria-label": "search" }}
			/>
		</div>
	);
}
