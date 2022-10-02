import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gap, HeaderStack, MinButton, Number, PlusButton, Size, Title } from '../../components'
import { customColors, customFonts } from '../../utils'
import { BtnCart, BtnFavBlack, BtnFavWhite } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setCart, setFav } from '../../redux/action'

const Detail = ({navigation, route}) => {
    const data = route.params
    const dispatch = useDispatch()

    const [size, setSize] = useState("S")
    const [qty, setQty] = useState(1)

    const [price, setPrice] = useState(data.price)
    const [total, setTotal] = useState(price)

    const [favourite, setFavoruit] = useState(false)
    const {fav, cart} = useSelector(state => state.globalReducer)

    useEffect(() => {
        if (fav.length > 0) {
            initFav()
        }
        console.log(cart)
    }, [])
    
    const initFav = () => {
        fav.map(fav => {
            if (fav.id == data.id) {
                setFavoruit(true)
            }
        })
    }

    const setFavourite = () => {
        if (favourite) {
            setUnfav()
        } else {
            setFavoriteTrue()
        }
    }

    const setFavoriteTrue = () => {
        setFavoruit(true)
        const newState = []
        fav.map(fav => {
            newState.push(fav)
        })

        newState.push(data)
        dispatch(setFav(newState))
    }

    const setUnfav = () => {
        setFavoruit(false)
        setTimeout(() => {
            const remove = fav.filter(fav => fav.id != data.id)
            dispatch(setFav(remove))
        }, 100);
    }

    const addToCart = () => {
        const newCart = []
        
        data.qty = qty
        data.size = size

        cart.map(data => {
            newCart.push(data)
        })

        newCart.push(data)

        dispatch(setCart(newCart))

        navigation.navigate('Cart')
    }

    return (
        <ScrollView style={styles.container}>
            <HeaderStack onPress={() => navigation.goBack()}/>
            <Title title={data.name}/>
            <Text style={styles.desc} numberOfLines={2}>{data.desc}</Text>
            <View style={styles.mainContent}>
                <Image source={{ uri: `http://192.168.100.16:8000/media/img/${data.img}` }} style={styles.img}/>
                <Text style={styles.sizetext}>Size : </Text>
                <View style={styles.sizecontainer}>
                    <Size size={"S"} active={size == 'S'} onPress={() => setSize('S')}/>
                    <Size size={"M"} active={size == 'M'} onPress={() => setSize('M')}/>
                    <Size size={"L"} active={size == 'L'} onPress={() => setSize('L')}/>
                </View>
                <View style={styles.qtyContainer}>
                    <Text style={styles.qtytext}>Quantity :</Text>
                    <View style={styles.qtyCounter}>
                        <MinButton onPress={() => {
                            setQty(qty > 1 ? qty-1 : qty)
                            setTotal(qty > 1 ? total - price : total)
                        }}/>
                        <Text style={styles.qty}>{qty}</Text>
                        <PlusButton onPress={() => {
                            setQty(qty+1)
                            setTotal(total+price)
                        }}/>
                    </View>
                </View>
            </View>
            <View style={styles.cartContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.price}>Price</Text>
                    <Text style={styles.total}><Number number={total}/></Text>
                </View>
                <View style={styles.cartBtns}>
                    <TouchableOpacity style={styles.favbtn(favourite)} activeOpacity={0.5} onPress={() => setFavourite()}>
                        {
                            favourite ? <BtnFavWhite/> : <BtnFavBlack/>
                        }
                    </TouchableOpacity>
                    <Gap width={20}/>
                    <TouchableOpacity style={styles.cartbtn} activeOpacity={0.5} onPress={() => addToCart()}>
                        <BtnCart/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    desc: {
        marginHorizontal: 30,
        fontSize: 16,
        color: customColors.text.secondary,
        fontFamily: customFonts.primary.medium
    },
    mainContent : {
        marginHorizontal: 30,
        marginTop: 50
    },
    img: {
        resizeMode: 'cover',
        height: 216,
        width: '100%'
    },
    sizetext : {
        marginTop: 50,
        fontSize: 14,
        fontFamily: customFonts.primary.medium,
        color: customColors.text.primary
    },
    sizecontainer : {
        marginTop: 4,
        flexDirection: 'row'
    },
    qtyContainer : {
        marginTop: 40,
    },
    qtytext : {
        fontSize: 14,
        fontFamily: customFonts.primary.medium,
        color: customColors.text.primary
    },
    qtyCounter : {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center'
    },
    qty: {
        fontSize: 20,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.text.primary,
        marginHorizontal: 16
    },
    cartContainer: {
        marginTop: 40,
        marginHorizontal: 30,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems : 'center'
    },
    total: {
        fontSize: 20,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.text.primary,
        marginTop: 9
    },
    cartBtns : {
        flexDirection: 'row'
    },
    favbtn : (fav) => ({
        width: 60,
        height: 60,
        backgroundColor: fav ? customColors.blue : customColors.card.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 1
    }),
    cartbtn : {
        width: 60,
        height: 60,
        backgroundColor: customColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 1
    }
})