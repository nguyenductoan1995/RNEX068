/* eslint-disable no-underscore-dangle */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import PERSIST_CONFIG from 'config/ReduxPersist'
import rootReducer from 'stores/reducer'
import rootSaga from 'stores/saga'
import '../config/ReactotronConfig'
import Reactotron from 'reactotron-react-native'
import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store = null

export default function _configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })

  if (__DEV__) {
    middlewares.push(logger)
  }
  middlewares.push(sagaMiddleware)

  const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer)

  if (__DEV__) {
    const createdEnhancer = Reactotron.createEnhancer()
    store = createStore(
      persistedReducer,
      {},
      compose(
        composeWithDevTools(applyMiddleware(...middlewares)),
        createdEnhancer,
      ),
    )
  } else {
    store = configureStore({
      reducer: persistedReducer,
      middleware: middlewares,
      devTools: __DEV__,
    })
  }

  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
export const Store = store
