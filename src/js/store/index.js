import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

export default function configureStore({ initialState, rootReducer, rootSaga }) {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  );
  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
}
