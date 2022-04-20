import { Block } from 'galio-framework'
import RootNavigation from 'navigation/RootNavigation'
import React from 'react'
import { Loading } from './Global'

function AppLoading() {
  return (
    <Block flex={1}>
      <RootNavigation />
      <Loading.Component />
    </Block>
  )
}
export default AppLoading
