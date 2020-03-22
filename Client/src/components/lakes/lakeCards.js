import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import history from "../../utils/history";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import { currentLake, favoritedLake } from "../actions/lakeActions";

const useStyles = makeStyles(theme => ({
	root: {
		margin: ".75%",
		maxWidth: 345,
		height: "45vh" //view height to normalize size across all cards
	},
	shareIcon: {
		color: "blue"
	},
	heartIcon: {
		color: red[500] //material ui color on scale of 0-1000.imported
		//future implement active, inactive
	},
	link: {
		fontSize: "2vh" //responsive
	},
	media: {
		height: "25vh", //attempt at responsiveness
		paddingTop: "56.25%" // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

export default function LakeCard(props) {
	const { lake } = props;
	const [isLiked, setLiked] = useState(false)
	const [likeMessage, setLikeMessage] = useState('')
	const classes = useStyles();
	const dispatch = useDispatch()
	const handleFavorite = () => {
		setLikeMessage('Added to your favorites!')
		setTimeout(()=>setLikeMessage(''), 2000)
		favoritedLake(dispatch, lake)
		console.log(lake.name)
		setLiked(!isLiked)
	}
	
	
	const handleSelection = () => {
		currentLake(dispatch, lake);
		history.push("/lake");
	};

	return (
		<Card className={classes.root}>
			{/* //for getting the mouse over link effect */}
			
			{(likeMessage !== '')? <h2 style={{color: 'red', textAlign:'center'}}>{likeMessage}</h2>: null}
			<a href="">
				<CardMedia
					onClick={() => handleSelection()}
					className={classes.media}
					image={lake.images[0]}
					title={lake.name}
				/>
			</a>

			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{lake.description.slice(0, 200) + " "}
					<Link className={classes.link} href={"#"} title="Learn More">
						...
					</Link>
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					className={classes.heartIcon}
					aria-label="add to favorites"
					title="add to favorites"
					disabled={isLiked}
					onClick={() => handleFavorite()} 
				>
					<FavoriteIcon />
				</IconButton>
				<IconButton
					className={classes.shareIcon}
					aria-label="share"
					title="share"
				>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
