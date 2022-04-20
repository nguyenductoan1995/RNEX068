/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View } from 'react-native'
import RootNavigation from 'navigation/RootNavigation'

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <RootNavigation />
    </View>
  )
}

export default App
