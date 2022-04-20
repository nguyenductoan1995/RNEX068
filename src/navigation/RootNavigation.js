import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { TransitionPresets } from '@react-navigation/stack'
import Home from 'Home'
import Detail from 'Detail'
import { TransitionPresets } from '@react-navigation/stack'
import Info from 'Info'
import screens from './screens'
import { Context } from './context'
import Navigator from './Navigator'
import MainStack from './MainStack'

const Stack = createNativeStackNavigator()

function RootNavigation() {
  const [authStack, setAuthStack] = React.useState(true)
  const authContext = React.useMemo(() => ({
    authStack: () => {
      setAuthStack(true)
    },
    mainStack: () => {
      setAuthStack(false)
    },
  }), [])

  const links = {
    prefixes: ['https://example.com', 'example://'],
  }

  return (
    <Context.Provider value={authContext}>
      <NavigationContainer linking={links} ref={Navigator.setContainer}>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{ headerShown: false }}
        >
          {authStack ? <Stack.Screen name={screens.Home} component={Home} /> : <Stack.Screen name={screens.Main} component={MainStack} />}
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>

  )
}

export default RootNavigation
