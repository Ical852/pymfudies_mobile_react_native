import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconMiniPlus } from '../../../assets'
import { customColors } from '../../../utils'

const CardAddBtn = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
      <IconMiniPlus/>
    </TouchableOpacity>
  )
}

export default CardAddBtn

const styles = StyleSheet.create({
  container: {
    backgroundColor: customColors.primary,
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})