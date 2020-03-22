import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function SimpleSelect(props) {
	const [selected, setSelected] = React.useState("");
	const { values } = props;
	const menuItems = values.map(value => {
		return (
			<MenuItem key={value} value={value}>
				{value}
			</MenuItem>
		);
	});
	const dispatch = useDispatch();
	const classes = useStyles();

	const handleChange = event => {
    
    const { value } = event.target;
    console.log(value)
		setSelected(value);

		props.action(dispatch, value);
	};

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel style={{ color: "white" }} id="demo-simple-select-label">
					{props.name}
				</InputLabel>
				<Select
					style={{ color: "white" }}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={selected}
					onChange={handleChange}
				>
					<MenuItem   value="all"> all </MenuItem>
					{menuItems}
				</Select>
			</FormControl>
		</div>
	);
}
