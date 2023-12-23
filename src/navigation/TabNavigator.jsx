import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import MapComponent from '../components/MapComponent/MapComponent'

const tabs = [
    {
        title: 'Map',
        icon: 'map-outline',
        component: MapComponent
    },
    {
        title: 'Cars',
        icon: 'car-outline',
        component: MapComponent
    },
    {
        title: 'Scan',
        icon: 'scan-circle-outline',
        component: MapComponent
    },
    {
        title: 'Trips',
        icon: 'lock-closed-outline',
        component: MapComponent
    },
    {
        title: 'Profile',
        icon: 'person-outline',
        component: MapComponent
    },
]

const { height } = Dimensions.get('window')
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName='Map'
        
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarShowLabel: false
        }}
    >
        {tabs.map(t => 
            <Tab.Screen
                key={t.title}
                name={t.title}
                component={t.component}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarItem}>
                            <Ionicons
                                name={t.icon}
                                size={24}
                                color={ focused ? 'lightblue' : 'black' }
                            />
                            <Text style={ focused ? styles.activeText : styles.itemText}>
                                {t.title}
                            </Text>
                        </View>
                    )
                }}
            />
        )}
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        height: height * 0.08,
        borderTopColor: 'lightgrey',
        borderTopWidth: 0.7,
    },
    tabBarItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        color: 'grey',
        fontWeight: '300',
        fontSize: 13
    },
    activeText: {
        color: 'black',
        fontSize: 13
    },
})