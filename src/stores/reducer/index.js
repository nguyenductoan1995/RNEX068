import { combineReducers } from '@reduxjs/toolkit'
import storage from '@react-native-async-storage/async-storage'
import {
  persistReducer,
} from 'redux-persist'

import auth from './auth'

const authConfig = {
  key: 'authStore',
  storage,
  whitelist: ['user'],
  blacklist: ['isLoading'],
}

export default combineReducers({
  authStore: persistReducer(authConfig, auth),
})
