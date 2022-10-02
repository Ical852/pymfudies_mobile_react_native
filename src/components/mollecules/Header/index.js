import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconCart, IconDrawer } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.2}>
          <IconDrawer/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Cart')}>
          <IconCart/>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30,
        alignItems: 'center'
    },
})