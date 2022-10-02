import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { customColors, customFonts } from '../../utils'
import { Success } from '../../assets'
import { Gap, MiniButton } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../redux/action'

const SuccessPage = ({navigation}) => {
    const dispatch = useDispatch()
    const { refresh } = useSelector(state => state.globalReducer)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCart([]))
            dispatch({type: 'SET_REFRESH', value: refresh+1})
        }, 3000);
    })
  return (
    <View style={styles.container}>
        <Success/>
        <Text style={styles.emptyTitle}>Payment Success!</Text>
        <Text style={styles.emptyDesc}>Now you just need to wait for the food that you already ordered</Text>
        <Gap height={30}/>
        <MiniButton title={"Home"} onPress={() => navigation.replace('MainPage')}/>
    </View>
  )
}

export default SuccessPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: customColors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyTitle: {
        fontSize: 20,
        color: customColors.text.primary,
        fontFamily: customFonts.primary.regular,
        marginTop: 50
    },
    emptyDesc : {
        color: customColors.text.empty,
        fontSize: 14,
        fontFamily: customFonts.primary.light,
        maxWidth: 227,
        textAlign: 'center',
        marginTop: 6
    },
})