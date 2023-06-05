import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
// import heroesReducer from '../reducers/heroes';
// import filtersReducer from '../reducers/filters';
import heroesReducer from '../components/heroesList/heroesSlice';
import filtersReducer from '../components/heroesFilters/filtersSlice'

const stringMiddleware =
	({ dispatch, getState }) =>
	(next) =>
	(action) => {
		if (typeof action === 'string') {
			return next({
				type: action,
			});
		}
		return next(action);
	};

const store = configureStore({
	reducer: { heroesReducer , filtersReducer },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
});

// Enhancer
// const enhancer =
// 	(createStore) =>
// 	(...args) => {
// 		const store = createStore(...args);

// 		const oldDispatch = store.dispatch;
// 		store.dispatch = (action) => {
// 			if (typeof action === 'string') {
// 				return oldDispatch({
// 					type: action,
// 				});
// 			}
// 			return oldDispatch(action);
// 		};
// 		return store;
// 	};

// const store = createStore(
// 	combineReducers({ heroesReducer, filtersReducer }),
// 	compose(
// 		applyMiddleware(ReduxThunk, stringMiddleware),
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	)

// 	// compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );

export default store;
