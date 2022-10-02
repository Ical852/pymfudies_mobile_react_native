import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const NotifCard = ({title, desc, date}) => {
  return (
    <View style={styles.container}>
        <View style={styles.ndetail}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.desc} numberOfLines={3}>{desc}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
    </View>
  )
}

export default NotifCard

const styles = StyleSheet.create({
    container : {
        height: 120,
        backgroundColor: customColors.card.secondary,
        borderRadius: 12,
        elevation: 0.8,
        marginBottom: 20,
        marginHorizontal: 30,
        paddingLeft: 24,
        paddingRight: 14,
        paddingVertical: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ndetail : {
        flex: 1,
    },
    date : {
        marginLeft: 20,
        fontSize: 12,
        fontFamily: customFonts.primary.regular,
        color: customColors.text.secondary
    },
    desc: {
        fontSize: 12,
        fontFamily: customFonts.primary.medium,
        color: customColors.text.secondary,
        marginTop: 4
    },
    title : {
        fontSize: 14,
        color: customColors.text.primary,
        fontFamily: customFonts.primary.medium
    }
})