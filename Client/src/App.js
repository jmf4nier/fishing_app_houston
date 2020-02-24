import React from "react";
import NavBar from "./components/navBar/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/protectedPages/Profile";
import history from "./utils/History";
import PrivateRoute from "./components/protectedPages/PrivateRoute";
import ExternalApi from "./components/ExternalApi";
import Home from "./components/lakes/LakeHome";
import LakeShowPage from "./components/lakes/LakeShowPage";

function App() {

	const { loading } = useAuth0();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="App">
			<Router history={history}>
				<header>
					<NavBar />
				</header>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/lake" component={LakeShowPage} />
					<PrivateRoute path="/profile" component={Profile} />
					<PrivateRoute path="/external-api" component={ExternalApi} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
