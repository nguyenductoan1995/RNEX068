import { Context } from 'navigation/context'
import React, { } from 'react'
import { Text, View } from 'react-native'

function Home() {
  const { mainStack } = React.useContext(Context)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={mainStack}>Toan</Text>
    </View>
  )
}

export default Home
