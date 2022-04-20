import { Context } from 'navigation/context'
import React, { } from 'react'
import { Text } from 'react-native'
import { Block } from 'galio-framework'
import { VectorIcon } from 'Components/common'

function Home() {
  const { mainStack } = React.useContext(Context)

  return (
    <Block flex={1} center middle>
      <VectorIcon name="facebook-square" type="ant" />
      <Text onPress={mainStack}>Toan</Text>
    </Block>

  )
}

export default Home
