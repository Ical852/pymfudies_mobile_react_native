import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { Provider, useSelector } from 'react-redux'
import { Loading } from './components'
import store from './redux/store'
import { StatusBar } from 'react-native'
import { customColors } from './utils'

const MainApp = () => {
  const { isLoading } = useSelector(state => state.globalReducer)
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={customColors.primary} />
      <Router/>
      {isLoading && <Loading/> }
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App