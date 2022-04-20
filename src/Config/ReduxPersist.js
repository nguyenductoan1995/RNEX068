import AsyncStorage from '@react-native-async-storage/async-storage'

const REDUX_PERSIST = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['setting', 'cache', 'option'],
}

export default REDUX_PERSIST
