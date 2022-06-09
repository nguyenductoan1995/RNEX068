import { Context } from 'navigation/context'
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { Block } from 'galio-framework'
import { VectorIcon } from 'components/common'
import { useLogin } from 'stores/hook/auth'

function Home() {
  const { mainStack } = React.useContext(Context)
  const login = useLogin()

  // useEffect(() => {
  //   login({
  //     username: 'toanDev@gmail.com', password: 'Toan12345',
  //   })
  // }, [])

  return (
    <Block flex={1} center middle>
      <VectorIcon name="facebook-square" type="ant" />
      <Text onPress={mainStack}>Toan</Text>
    </Block>

  )
}

export default Home
