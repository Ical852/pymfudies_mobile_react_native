import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconMiniMinusBlack } from '../../../assets'
import { customColors } from '../../../utils'

const MinButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
      <IconMiniMinusBlack/>
    </TouchableOpacity>
  )
}

export default MinButton

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    backgroundColor: customColors.card.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0.5,
    borderRadius: 50
  }
})