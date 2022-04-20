import Detail from 'Page/Detail'

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Info from 'Page/Info'
import screens from './screens'

const Tab = createBottomTabNavigator()

function MainStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={screens.Details} component={Detail} />
      <Tab.Screen name={screens.Info} component={Info} />
    </Tab.Navigator>
  )
}
export default MainStack
