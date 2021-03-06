import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native



// const initialState = {};

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['userReducer']
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [thunk];



export const store = createStore(
       persistedReducer, 
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
export const persistor = persistStore(store);
    