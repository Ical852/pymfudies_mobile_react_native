import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { customColors, customFonts } from '../../utils'
import { Logo } from '../../assets'

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainPage')
    }, 2000);
  }, [])

  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.title}>Py M Fudies</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container : {
    backgroundColor: customColors.primary,
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center'
  },
  title : {
    color: customColors.white,
    fontSize: 32,
    fontFamily: customFonts.primary.semiBold,
    marginTop : 16
  }
})