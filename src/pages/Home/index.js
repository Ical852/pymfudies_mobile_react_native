import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { IconSearch } from '../../assets'
import { FoodCard, Gap } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Home = () => {
  const { food } = useSelector(state => state.homeReducer)
  
  const navigation = useNavigation()
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput placeholder='Search delicious food' style={styles.textinput}/>
        <IconSearch/>
      </View>
      <View style={styles.catcontainer}>
        <View style={styles.currentcat}>
          <Text style={styles.cattext1}>Fast Food</Text>
          <View style={{ backgroundColor: customColors.primary, height: 2, width: 25 }}/>
        </View>
        <Text style={styles.cattext}>Desert</Text>
        <Text style={styles.cattext}>Drinks</Text>
        <Text style={styles.cattext}>Snacks</Text>
      </View>
      <Text style={styles.populartext}>Popular Food</Text>
      <View style={styles.foodContainer} showsVerticalScrollIndicator={false}>
        {
          food.length > 0 &&
          food.map(food => {
            return (
              <FoodCard
                key={food.id}
                img={{ uri: `http://192.168.100.16:8000/media/img/${food.img}` }}
                title={food.name}
                desc={food.desc}
                price={food.price}
                onCardPress={() => navigation.navigate('Detail', food)}
              />
            )
          })
        }
        <Gap height={120}/>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  searchBox : {
    backgroundColor : customColors.card.primary,
    flexDirection : 'row',
    alignItems: 'center',
    marginHorizontal : 30,
    paddingVertical : 2,
    paddingHorizontal: 30,
    borderRadius : 12,
    elevation : 1
  },
  textinput : {
    fontFamily : customFonts.primary.medium,
    color : customColors.text.secondary,
    flex: 1,
    fontSize : 14
  },
  catcontainer : {
    marginTop : 30,
    marginHorizontal : 30,
    flexDirection : 'row',
    justifyContent: 'space-between'
  },
  cattext: {
    fontSize: 14,
    fontFamily: customFonts.primary.semiBold,
    color: customColors.text.secondary
  },
  cattext1: {
    fontSize: 14,
    fontFamily: customFonts.primary.semiBold,
    color: customColors.primary
  },
  currentcat : {
    alignItems: 'center'
  },
  populartext : {
    marginHorizontal : 30,
    marginTop : 30,
    fontSize: 30,
    fontFamily: customFonts.primary.semiBold,
    color: customColors.text.primary
  },
  foodContainer : {
    marginHorizontal : 30,
    marginTop: 18
  }
})