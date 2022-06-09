import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import Spinner from 'react-native-spinkit'

let instance = null
class Loading extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    instance = this
  }

  componentDidMount() {}

  componentWillUnmount() {}

  hide() {
    this.setState({
      show: false,
    })
  }

  show() {
    const { show } = this.state
    if (!show) {
      this.setState({
        show: true,
      })
    }
  }

  render() {
    const { show } = this.state
    if (!show) {
      return null
    }
    return (
      <View style={styles.container}>
        <Spinner type="ChasingDots" size={50} color="white" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 100,
  },
})

const PageSearching = {
  Component: Loading,
  show() {
    if (instance !== null) {
      instance.show()
    }
  },
  hide() {
    if (instance !== null) {
      instance.hide()
    }
  },
}

export default PageSearching
