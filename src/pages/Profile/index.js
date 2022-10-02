import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Title } from '../../components'
import { DummyAva, IconRight } from '../../assets'
import { customColors, customFonts } from '../../utils'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Title title={"My Profile"}/>
      <View style={styles.profilecontent}>
        <Image source={DummyAva} style={styles.img}/>
        <Text style={styles.name}>Shalahuddin Ahmad Aziz</Text>
        <Text style={styles.email}>@shalahuddinahmad.aziz@gmail.com</Text>
      </View>
      <View style={styles.account}>
        <View style={{ backgroundColor: '#F2F2F2', height: 1 }}/>
        <Text style={styles.acctext}>Account</Text>
        <View style={{ backgroundColor: '#1C1C1C', height: 3, width: 40, marginLeft: 35 }}/>
        <View style={{ backgroundColor: '#F2F2F2', height: 1 }}/>
      </View>
      <TouchableOpacity style={styles.itemprofile} activeOpacity={0.2} onPress={() => navigation.navigate('Transactions')}>
        <Text style={styles.itemtitle}>Transactions</Text>
        <IconRight/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemprofile} activeOpacity={0.2}>
        <Text style={styles.itemtitle}>Help Center</Text>
        <IconRight/>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilecontent : {
    alignItems: 'center',
    marginTop: 40
  },
  img : {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  name : {
    fontSize: 16,
    color: customColors.text.primary,
    fontFamily: customFonts.primary.medium,
    marginTop: 16
  },

  email : {
    fontSize: 14,
    color: customColors.text.secondary,
    fontFamily: customFonts.primary.light,
    marginTop: 6
  },
  account : {
    marginTop: 40
  },
  acctext : {
    fontSize: 14,
    color: customColors.text.primary,
    fontFamily: customFonts.primary.medium,
    marginLeft: 25,
    marginTop: 16,
    marginBottom: 8
  },
  itemprofile : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 16
  },
  itemtitle : {
    fontSize: 14,
    fontFamily: customFonts.primary.regular,
    color: customColors.text.primary
  }
})