import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 200
	},

	chips: {
		display: "flex",
		flexWrap: "wrap"
	},
	chip: {
		margin: 1
	},
	noLabel: {
		marginTop: theme.spacing(3)
	}
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 300
		}
	}
};

const species = [
    "largemouth bass",
    "small mouth bass",
    "crappie",
    "bluegill",
    "yellow catfish",
    "blue catfish",
    "carp"
];

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium
	};
}

export default function MultipleSelect() {
    //for changing style to mobile later on based on screen size
	const matches = useMediaQuery(
		json2mq({
			minWidth: 800
		})
	);

	const classes = useStyles();
	const theme = useTheme();
	const [personName, setPersonName] = React.useState([]);

	const handleChange = event => {
		setPersonName(event.target.value);
	};

	const handleChangeMultiple = event => {
		const { options } = event.target;
		const value = [];
		for (let i = 0, l = options.length; i < l; i += 1) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}
		setPersonName(value);
	};
	const desktopView = (
		<FormControl className={classes.formControl}>
            
			<InputLabel id="demo-mutiple-chip-label">Species</InputLabel>
			<Select
				labelId="demo-mutiple-chip-label"
				id="demo-mutiple-chip"
				multiple
				value={personName}
				onChange={handleChange}
				input={<Input id="select-multiple-chip" />}
				renderValue={selected => (
					<div className={classes.chips}>
						{selected.map(value => (
							<Chip key={value} label={value} className={classes.chip} />
						))}
					</div>
				)}
				MenuProps={MenuProps}
			>
				{species.map(name => (
					<MenuItem
						key={name}
						value={name}
						style={getStyles(name, personName, theme)}
					>
						{name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
	const mobileView = (
		<FormControl className={classes.formControl}>
			<InputLabel shrink htmlFor="select-multiple-native">
				Native
			</InputLabel>
			<Select
				multiple
				native
				value={personName}
				onChange={handleChangeMultiple}
				inputProps={{
					id: "select-multiple-native"
				}}
			>
				{species.map(name => (
					<option key={name} value={name}>
						{name}
					</option>
				))}
			</Select>
		</FormControl>
	);

	return <div style={{marginRight: -10}}>{desktopView}</div>;
}
