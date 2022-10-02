import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const MiniButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.textbtn}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MiniButton

const styles = StyleSheet.create({
    container : {
        paddingVertical: 12,
        backgroundColor: customColors.primary,
        borderRadius: 8,
        width: 200,
        alignItems: 'center'
    },
    textbtn: {
        fontSize: 14,
        fontFamily : customFonts.primary.semiBold,
        color: customColors.white
    }
})