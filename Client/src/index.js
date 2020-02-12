// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/History";
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'


// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

ReactDOM.render(
	<Auth0Provider
		domain={config.domain}
		client_id={config.clientId}
		redirect_uri={window.location.origin}
		onRedirectCallback={onRedirectCallback}
		audience={config.audience}
	>
		<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

			<App />
      </PersistGate>
		</Provider>
	</Auth0Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
