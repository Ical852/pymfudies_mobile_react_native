import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { customColors, customFonts } from '../../utils'
import { Header } from '../../components'
import { MenuFav, MenuFavActive, MenuHome, MenuHomeActive, MenuNotif, MenuNotifActive, MenuProfile, MenuProfileActive } from '../../assets'
import Home from '../Home'
import Notifications from '../Notifications'
import Favourite from '../Favourite'
import Profile from '../Profile'
import { useDispatch, useSelector } from 'react-redux'
import { getFood, getNotif, getTransactions, setPage } from '../../redux/action'

const MainPage = () => {
  const {main} = useSelector(state => state.homeReducer)
  const dispatch = useDispatch()

  const { food, notif, trans } = useSelector(state => state.homeReducer)
  const { refresh } = useSelector(state => state.globalReducer)
  
  const setMainPage = (param) => {
    dispatch(setPage(param))
  }

  useEffect(() => {
    if (food.length < 1) {
      dispatch(getFood())
    }
    if (notif.length < 1) {
      dispatch(getNotif())
    }
    if (trans.length < 1) {
      dispatch(getTransactions())
    }
  }, [refresh])

  const InitPage = () => {
    return main == 1 ? <Home/> :
          main == 2 ? <Notifications/> :
          main == 3 ? <Favourite/> :
          <Profile/>
  }

  const InitHomeIcon = () => {
    return main == 1 ? 
      <View style={styles.menuItem}>
        <MenuHomeActive/>
        <Text style={styles.menuTitle}>Home</Text>
      </View>
    : <MenuHome/>
  }

  const InitNotifIcon = () => {
    return main == 2 ? 
      <View style={styles.menuItem}>
        <MenuNotifActive/>
        <Text style={styles.menuTitle}>Notifications</Text>
      </View>
    : <MenuNotif/>
  }

  const InitFavIcon = () => {
    return main == 3 ? 
      <View style={styles.menuItem}>
        <MenuFavActive/>
        <Text style={styles.menuTitle}>Favourite</Text>
      </View>
    : <MenuFav/>
  }

  const InitProfileIcon = () => {
    return main == 4 ? 
      <View style={styles.menuItem}>
        <MenuProfileActive/>
        <Text style={styles.menuTitle}>My Profile</Text>
      </View>
    : <MenuProfile/>
  }

  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <InitPage/>
        </View>
        <View style={styles.navigator}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setMainPage(1)}>
            <InitHomeIcon/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setMainPage(2)}>
            <InitNotifIcon/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setMainPage(3)}>
            <InitFavIcon/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setMainPage(4)}>
            <InitProfileIcon/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: customColors.white
    },
    navigator : {
      height: 70,
      backgroundColor: customColors.card.primary,
      marginBottom : 30,
      elevation: 0.18,
      borderRadius : 27,
      position: 'absolute',
      bottom: 0,
      width: Dimensions.get('window').width - 60,
      marginLeft: 30,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    content : {
      flex: 1,
    },
    menuItem : {
      width: 150,
      backgroundColor: customColors.primary,
      paddingHorizontal : 12,
      paddingVertical : 10,
      flexDirection: 'row',
      borderRadius: 27,
      alignItems: 'center'
    },
    menuTitle : {
      marginLeft: 10,
      fontSize : 14,
      fontFamily: customFonts.primary.bold,
      color: customColors.white
    }
})