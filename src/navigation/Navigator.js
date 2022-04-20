import {
  CommonActions,
  StackActions,
  TabActions,
} from '@react-navigation/native'

let _container

function setContainer(container) {
  _container = container
}

function popToTop() {
  _container.dispatch(StackActions.popToTop())
}

function reset(name, params, key) {
  _container.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name,
          params,
          key,
        },
      ],
    }),
  )
}

function goBack() {
  _container.dispatch(CommonActions.goBack())
}

function navigate(name, params, key) {
  if (_container) {
    _container.dispatch(
      CommonActions.navigate({
        name,
        params,
        key,
      }),
    )
  }
}

function jumpToAction(name, params) {
  if (_container) {
    _container.dispatch(
      TabActions.jumpTo(name, {
        params,
      }),
    )
  }
}

function navigateDeep(actions) {
  _container.dispatch(
    actions.reduceRight(
      (prevAction, action) => CommonActions.navigate({
        name: action.name,
        params: action.params,
        action: prevAction,
      }),
      undefined,
    ),
  )
}

function getCurrentRoute() {
  if (!_container || !_container.state) {
    return null
  }
  const findCurrentRoute = (state) => {
    const route = state.routes[state.index]

    if (route.state) {
      return findCurrentRoute(route.state)
    }

    return state
  }

  return findCurrentRoute(_container.state)
}

function replace(name, params, key) {
  if (_container) {
    _container.dispatch(
      StackActions.replace({
        name,
        params,
        key,
      }),
    )
  }
}

function push(name, params, key) {
  if (_container) {
    _container.dispatch(StackActions.push(name, params))
  }
}

const Navigator = {
  _container,
  setContainer,
  popToTop,
  navigateDeep,
  navigate,
  reset,
  goBack,
  getCurrentRoute,
  replace,
  push,
  jumpToAction,
}

if (__DEV__) {
  Object.keys(Navigator).forEach((value) => {
    const _func = Navigator[value]
    if (
      typeof _func === 'function'
      && value !== 'goBack'
      && value !== 'setContainer'
    ) {
      Navigator[value] = (...args) => {
        console.log(value, ...args)
        _func(...args)
      }
    }
  })
}

export default Navigator
