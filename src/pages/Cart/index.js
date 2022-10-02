import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts, linkApi } from '../../utils'
import { BottomButton, FoodCard, Gap, HeaderStack, Loading, MiniButton, Title } from '../../components'
import { Dummy1, EmptyCart } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setCart, setLoading, setPage } from '../../redux/action'
import axios from 'axios'
import WebView from 'react-native-webview'

const Cart = ({navigation}) => {
  const dispatch = useDispatch()
  const [paymentUrl, setPaymentUrl] = useState("")
  const orderFoods = () => {
    navigation.navigate('MainPage')
    dispatch(setPage(1))
  }
  const { cart } = useSelector(state => state.globalReducer)

  const cartAddQty = (id) => {
    const newCart = cart
    newCart.map(data => {
      if (data.id == id) {
        data.qty += 1
      }
    })

    dispatch(setCart(newCart))
  }

  const cartMinQty = (id) => {
    const newCart = cart
    newCart.map(data => {
      if (data.id == id) {
        if (data.qty > 1) {
          data.qty -= 1
          dispatch(setCart(newCart))
        } else {
          removeCart(id)
        }
      }
    })

  }

  const removeCart = (id) => {
    const remove = cart.filter(data => data.id != id)
    console.log(remove)
    dispatch(setCart(remove))
  }

  const checkout = () => {
    let totalPrice = 0
    const foodsCart = []
    cart.map(data => {
      foodsCart.push({
        "food_id": data.id,
        "quantity" : data.qty,
        "size" : data.size
      })
      totalPrice += (data.price * data.qty)
    })
    const orderId = Math.random().toString().substr(2, 8)
    
    const body = {
      order_id : orderId,
      total : totalPrice,
      foods : foodsCart
    }

    dispatch(setLoading(true))
    axios.post(`${linkApi}/transaction`, body)
      .then(res => {
        dispatch(setLoading(false))
        setPaymentUrl(res.data.data.transaction.payment_url)
      })
      .catch(err => {
        dispatch(setLoading(false))
        console.log(err.response)
      })
    
    axios.post(`${linkApi}/notification/`, {
        name: "Payment Success",
        desc: "The Foods that you ordered has been confirmed, wait until the food arrive to your location",
        date : "19 May"
      })
      .then(res => {
      })
      .catch(err => {
      })
  }

  const finishPayment = () => {
    setPaymentUrl("")
    setTimeout(() => {
      navigation.replace("Success")
    }, 1000);
  }

  return paymentUrl == "" ? (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <HeaderStack onPress={() => navigation.goBack()}/>
        <Title title={"Your Cart"}/>
        {
          cart.length > 0 ? 
          <View style={styles.carts}>
            {
              cart.map(data => {
                return (
                  <FoodCard
                    key={data.id}
                    type={"cart"}
                    qty={data.qty}
                    img={{ uri : `http://192.168.100.16:8000/media/img/${data.img}` }}
                    title={data.name}
                    desc={data.desc}
                    price={data.price * data.qty}
                    addBtn={() => cartAddQty(data.id)}
                    minBtn={() => cartMinQty(data.id)}
                  />
                )
              })
            }
            <Gap height={150}/>
          </View>
          :
          <View style={styles.emptyCart}>
            <Gap height={62}/>
            <EmptyCart/>
            <Text style={styles.emptyTitle}>Oops! No Carts Yet</Text>
            <Text style={styles.emptyDesc}>Seems like you have not ordered any food yet</Text>
            <Gap height={30}/>
            <MiniButton title={"Order Food"} onPress={() => orderFoods()}/>
          </View>
        }
      </ScrollView>
      {
        cart.length > 0 && <BottomButton title={"Checkout"} onPress={() => checkout()}/>
      }
    </>
  ) : (
    <>
      <HeaderStack title={"Payment"} onPress={() => finishPayment()}/>
      <WebView
        source={{ uri: paymentUrl }}
        renderLoading={() => <Loading/>}
      />
    </>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.white
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
  carts : {
    marginTop: 18,
    marginHorizontal: 30
  }
})