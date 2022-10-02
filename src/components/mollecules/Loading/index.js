import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { customColors, customFonts }  from '../../../utils'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={"large"} color={customColors.text.primary}/>
        <Text style={styles.loading}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0, 0.3)'
    },
    loading: {
        textAlign: 'center',
        color: customColors.text.primary,
        fontFamily: customFonts.primary.medium,
        fontSize: 18,
        marginTop: 12
    }
})