import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('state', serialisedState);
    } catch (err) {
        console.log(err);
    }
};

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();

const store = createStore(
  reducer,
  oldState,
  composeEnhancer(applyMiddleware(thunk))
  );

store.subscribe(() => {
    saveState(store.getState());
});

window.store = store;

export default store