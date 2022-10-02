import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { BtnFavMini, IconCheck, IconPlus, IconCross, IconPending } from '../../../assets'
import Number from '../Number'
import { CartAddBtn, CartRemoveBtn } from '../../atoms'

const FoodCard = ({title, desc, price, img, onPress, type, onCardPress, qty, addBtn, minBtn, status, size, items}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onCardPress}>
      <Image source={img} style={styles.img}/>
      <View style={styles.pdetail}>
          <Text style={styles.title}>{title} {type == 'trans' ? `- ${size}` : ''}</Text>
          <Text style={styles.desc} numberOfLines={1}>{desc}</Text>
          <Text style={styles.price}>{type == 'trans' ? `${items} items - `: ''}<Number number={price}/></Text>
      </View>
      {
        type == 'fav' ?
        <TouchableOpacity activeOpacity={0.7} style={styles.favbtn} onPress={onPress}>
            <BtnFavMini/>
        </TouchableOpacity>
        : type == 'cart' ?
        <View style={styles.cartGroupBtn}>
            <CartAddBtn onPress={addBtn}/>
            <Text style={styles.qty}>{qty}</Text>
            <CartRemoveBtn onPress={minBtn}/>
        </View>
        : type == 'trans' ?
        <View style={styles.statusView(status)}>
            {
                status == 'success' ? <IconCheck/>
                : status == 'cancelled' ? <IconCross/>
                : status == 'pending' ? <IconPending/>
                : <IconCheck/>
            }
        </View>
        :
        <TouchableOpacity activeOpacity={0.7}  style={styles.cartbtn} onPress={onPress}>
            <IconPlus/>
        </TouchableOpacity>
      }
    </TouchableOpacity>
  )
}

export default FoodCard

const styles = StyleSheet.create({
    container : {
        height: 120,
        backgroundColor: customColors.card.primary,
        borderRadius: 12,
        elevation: 1,
        paddingVertical: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    img : {
        width: 68,
        height: 70,
        borderRadius: 50
    },
    cartbtn: {
        backgroundColor: customColors.primary,
        width: 36,
        height: 36,
        position: 'absolute',
        bottom: 15,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 36/2
    },
    pdetail : {
        marginLeft: 18,
        flex: 1,
    },
    title: {
        fontSize: 14,
        color: customColors.text.primary,
        fontFamily: customFonts.primary.medium
    },
    desc: {
        maxWidth: 220,
        fontSize: 12,
        marginTop: -2,
        color: customColors.text.secondary,
        fontFamily: customFonts.primary.medium
    },
    price: {
        marginTop: 5,
        fontSize: 14,
        color: customColors.text.primary,
        fontFamily: customFonts.primary.semiBold
    },
    favbtn: {
        width: 45,
        height: 45,
        backgroundColor: customColors.blue,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartGroupBtn : {
        alignItems: 'center',
    },
    qty : {
        fontSize: 12,
        color: customColors.text.primary,
        fontFamily: customFonts.primary.medium,
        marginVertical: 10
    },
    statusView : (status) => ({
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: status == 'cancelled' ? customColors.danger : status == 'pending' ? customColors.primary : customColors.success,
        borderRadius: 50
    })
})