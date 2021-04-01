import {createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/root.js';
import { reducers } from 'reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false
  });
}

const configureStore = () => {
    const middlewares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(
        reducers,
        composeEnhancers(...enhancers)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;