import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { IconBack, IconOptions } from '../../../assets'
import { customColors, customFonts } from '../../../utils'

const HeaderStack = ({onPress, title}) => {
  return (
      <>
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
                <IconBack/>
            </TouchableOpacity>
            {
                title && <Text style={styles.title}>{title}</Text>
            }
            <TouchableOpacity activeOpacity={0.2}>
                <IconOptions/>
            </TouchableOpacity>
        </View>
        <View style={{ height: 1, color: customColors.text.primary }}/>
      </>
  )
}

export default HeaderStack

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title : {
        fontSize: 16,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.text.primary
    }
})