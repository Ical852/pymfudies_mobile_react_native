import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { BottomButton, FoodCard, Gap, HeaderStack, MiniButton, Title } from '../../components'
import { Dummy1, EmptyTransaction } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../redux/action'

const Transactions = ({navigation}) => {
    const dispatch = useDispatch()

    const { trans } = useSelector(state => state.homeReducer)
    console.log(trans)

    const orderFoods = () => {
        navigation.navigate('MainPage')
        dispatch(setPage(1))
    }
  return (
      <>
        <ScrollView style={styles.container}>
            <HeaderStack onPress={() => navigation.goBack()}/>
            <Title title={"Transactions"}/>
            {
                trans.length > 0 ?
                <View style={styles.transactions}>
                    {
                        trans.map(data => {
                            return (
                                <FoodCard
                                    key={data.id}
                                    title={data.food.name} 
                                    desc={data.food.desc} 
                                    price={data.food.price * data.quantity}
                                    img={{ uri : `http://192.168.100.16:8000/media/img/${data.food.img}` }}
                                    type={"trans"}
                                    status={"success"}
                                    size={data.size}
                                    items={data.quantity}
                                />
                            )
                        })
                    }
                    <Gap height={150}/>
                </View>
                :
                <View style={styles.emptyCart}>
                    <Gap height={62}/>
                    <EmptyTransaction/>
                    <Text style={styles.emptyTitle}>No Transactions Yet</Text>
                    <Text style={styles.emptyDesc}>Seems like you have not purchased any food yet</Text>
                    <Gap height={30}/>
                    <MiniButton title={"Order Foods"} onPress={() => orderFoods()}/>
                </View>
            }
        </ScrollView>
        {
            trans.length > 0 && <BottomButton title={"Order Foods"} onPress={() => orderFoods()}/>
        }
      </>
  )
}

export default Transactions

const styles = StyleSheet.create({
    container: {
        backgroundColor: customColors.white,
        flex: 1,
    },
    emptyCart: {
        alignItems: 'center',
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
        maxWidth: 222,
        textAlign: 'center',
        marginTop: 6
    },
    transactions : {
        marginTop: 18,
        marginHorizontal: 30
    }
})