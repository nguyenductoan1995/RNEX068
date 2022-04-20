/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
// import { View } from 'react-native'
import { Provider } from 'react-redux'
import _configureStore from 'Store/configStore'
import { PersistGate } from 'redux-persist/integration/react'
import AppLoading from 'Page/AppLoading'
import { setDefaultBaseURL, setDefaultHeaders } from 'utilities/function/Axios'

function App() {
  const { store, persistor } = _configureStore()

  const onBeforeLift = async () => {
    const languageTag = 'en'// store.getState().setting.languageTag
    const { isLogged, token } = store.getState().auth
    setDefaultBaseURL(languageTag)
    if (isLogged && token) {
      setDefaultHeaders({
        Authorization: `Bearer ${token}`,
      })
    }
    // if (languageTag) {
    //   i18n.changeLanguage(languageTag)
    //   numeral.locale(languageTag)
    //   dayjs.locale(languageTag)
    // }
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift}>
        <AppLoading />
      </PersistGate>
    </Provider>

  )
}

export default App
