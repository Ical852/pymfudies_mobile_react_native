import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const BottomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BottomButton

const styles = StyleSheet.create({
    container : {
        backgroundColor: customColors.primary,
        alignItems: 'center',
        paddingVertical: 16,
        position: 'absolute',
        bottom: 30,
        width: Dimensions.get('window').width - 60,
        marginLeft: 30,
        borderRadius: 12,
        elevation: 1
    },
    title: {
      fontSize: 20,
      color: customColors.white,
      fontFamily: customFonts.primary.semiBold,
    }
})