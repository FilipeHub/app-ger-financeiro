import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import persistReducers from './persistReducers';
import createStore from './createStore';
import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
