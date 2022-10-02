import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const Size = ({size, active, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(active)} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.title(active)}>{size}</Text>
    </TouchableOpacity>
  )
}

export default Size

const styles = StyleSheet.create({
    container: (active) => ({
        width: 60,
        height: 60,
        backgroundColor: active ? customColors.primary : customColors.card.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginRight: 20
    }),
    title: (active) => ({
        fontSize: 24,
        fontFamily: customFonts.primary.medium,
        color: active ? customColors.white : customColors.text.primary
    })
})