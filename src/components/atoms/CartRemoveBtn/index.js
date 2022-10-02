import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconMiniMinusWhite } from '../../../assets'
import { customColors } from '../../../utils'

const CartRemoveBtn = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
      <IconMiniMinusWhite/>
    </TouchableOpacity>
  )
}

export default CartRemoveBtn

const styles = StyleSheet.create({
  container : {
    backgroundColor: customColors.danger,
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})