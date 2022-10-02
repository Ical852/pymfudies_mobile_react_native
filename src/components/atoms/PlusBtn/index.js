import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'
import { IconPlus } from '../../../assets'

const PlusButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
      <IconPlus/>
    </TouchableOpacity>
  )
}

export default PlusButton

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    backgroundColor: customColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0.5,
    borderRadius: 50
  }
})