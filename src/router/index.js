const { createNativeStackNavigator } = require("@react-navigation/native-stack");
const { Splash, MainPage, Detail, Cart, SuccessPage, Transactions } = require("../pages");
import React from 'react'

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name='MainPage' component={MainPage}/>
            <Stack.Screen name='Detail' component={Detail}/>
            <Stack.Screen name='Cart' component={Cart}/>
            <Stack.Screen name='Success' component={SuccessPage}/>
            <Stack.Screen name='Transactions' component={Transactions}/>
        </Stack.Navigator>
    )
}

export default Router