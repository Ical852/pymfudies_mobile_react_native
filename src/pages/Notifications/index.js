import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Gap, NotifCard, Title } from '../../components'
import { customColors } from '../../utils'
import { useSelector } from 'react-redux'

const Notifications = () => {
  
  const { notif } = useSelector(state => state.homeReducer)
  console.log(notif)
  return (
    <ScrollView style={styles.container}>
      <Title title={"Notifications"}/>
      <Gap height={18}/>
      {
        notif.map(data => {
          return (
            <NotifCard
              key={data.id}
              title={data.name}
              desc={data.desc}
              date={data.date}
            />
          )
        })
      }
      <Gap height={150}/>
    </ScrollView>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: customColors.white
  },
})