import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { EmptyFav } from '../../assets'
import { FoodCard, Gap, MiniButton, Title } from '../../components'
import { setFav, setPage } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Favourite = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const findFoods = () => {
    dispatch(setPage(1))
  }

  const { fav } = useSelector(state => state.globalReducer)

  const setUnfav = (id) => {
    const removed = fav.filter(data => data.id != id)
    dispatch(setFav(removed))
  }

  return (
    <View style={styles.container}>
      <Title title={"Your Favourite"}/>
      {
        fav.length > 0 ? 
        <ScrollView style={styles.favcontainer}>
          {
            fav.map(data => {
              return (
                <FoodCard
                  key={data.id}
                  title={data.name}
                  desc={data.desc}
                  price={data.price}
                  type={"fav"}
                  img={{ uri: `http://192.168.100.16:8000/media/img/${data.img}` }}
                  onPress={() => setUnfav(data.id)}
                  onCardPress={() => navigation.navigate('Detail', data)}
                />
              )
            })
          }
        </ScrollView>
        :
        <View style={styles.emptyContainer}>
          <Gap height={62}/>
          <EmptyFav/>
          <Text style={styles.emptyTitle}>No Favourite Foods Yet</Text>
          <Text style={styles.emptyDesc}>Seems like you have not added any food to favourite yet</Text>
          <Gap height={30}/>
          <MiniButton title={"Find Foods"} onPress={() => findFoods()}/>
        </View>
      }
    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: customFonts.primary.semiBold,
    color: customColors.text.primary,
    marginTop: 9,
    marginHorizontal: 30
  },
  emptyContainer : {
    alignItems: 'center',
  },
  container: {
    flex: 1,
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
  favcontainer : {
    marginTop: 18,
    marginHorizontal: 30
  }
})