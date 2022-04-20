import { Context } from 'navigation/context'
import Navigator from 'navigation/Navigator'
import screens from 'navigation/screens'
import React from 'react'
import { Text, View } from 'react-native'

function Detail() {
  const { authStack } = React.useContext(Context)
  return (
    <View>
      <Text onPress={authStack}>
        Detail
      </Text>
      <Text onPress={() => Navigator.push(screens.Info)}>
        Info
      </Text>
    </View>
  )
}
export default Detail
