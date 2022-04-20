import { Block } from 'galio-framework'
import { Context } from 'navigation/context'
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { getMe } from 'Store/hook/auth'

function Detail() {
  const { authStack } = React.useContext(Context)

  const doGetMe = getMe()

  useEffect(() => {
    doGetMe({ login: true })
  }, [])

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
