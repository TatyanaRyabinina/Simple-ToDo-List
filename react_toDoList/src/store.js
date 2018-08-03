import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducers/index';
import rootSaga from './sagas/index';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form']
};

const history = createHistory();

const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware, sagaMiddleware)
);

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export default { store, persistor, history };
