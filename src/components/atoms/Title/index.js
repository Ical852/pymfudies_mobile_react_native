import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const Title = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.text.primary,
        marginTop: 9,
        marginHorizontal: 30
    }
})