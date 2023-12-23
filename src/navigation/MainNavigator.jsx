import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './TabNavigator'
import ChargerDetails from '../components/ChargerDetails/ChargerDetails'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ChargerDetails'
                component={ChargerDetails}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
