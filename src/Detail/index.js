import { Block } from 'galio-framework'
import { Context } from 'navigation/context'
import Navigator from 'navigation/Navigator'
import screens from 'navigation/screens'
import React from 'react'
import { Text } from 'react-native'

function Detail() {
  const { authStack } = React.useContext(Context)
  return (
    <Block center middle flex={1}>
      <Text onPress={authStack}>
        Detail
      </Text>
      <Text onPress={() => {}}>
        Info
      </Text>
    </Block>
  )
}
export default Detail
