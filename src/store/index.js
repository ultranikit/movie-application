import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    key: "root",
    storage,
    blacklist: ["movieReducer", "uiReducer"],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
