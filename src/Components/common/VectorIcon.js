// @flow
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicon from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

/**
 * @param ant AntDesign
 * @param ent Entypo
 */
export default React.forwardRef(({ color, size, type, name, ...props }, ref) => {
  switch (type) {
    case 'ant':
      return (
        <AntDesign
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'ent':
      return (
        <Entypo
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'ei':
      return (
        <EvilIcon
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'fe':
      return (
        <Feather
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'fa':
      return (
        <FontAwesome
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'fa5':
      return (
        <FontAwesome5
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'fo':
      return (
        <Foundation
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'md':
      return (
        <MaterialIcon
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'mdc':
      return (
        <MaterialCommunityIcon
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'oct':
      return (
        <Octicon
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'zo':
      return (
        <Zocial
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'simple':
      return (
        <SimpleLineIcon
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    case 'foto':
      return (
        <Fontisto
          {...props}
          name={name}
          type={type}
          size={size}
          color={color}
          ref={ref}
        />
      )
    default:
    case 'ionicons':
      return (
        <Ionicon
          {...props}
          name={name}
          size={size}
          color={color}
          ref={ref}
        />
      )
  }
})
