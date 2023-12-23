import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const TopBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.iconBox}>
                <Ionicons name='options-outline' size={24} />
            </View>
            <View style={styles.searchBox}>
                <Text style={styles.searchText}>Search for a location</Text>
            </View>
            <View style={styles.iconBox}>
                <Ionicons name='notifications-outline' size={22} />
            </View>
        </View>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'flex-end',
        width: width,
        height: height * 0.17,
        backgroundColor: 'white',
        padding: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    row: {
        flexDirection: 'row',
        height: 45,
        gap: 10
    },
    iconBox: {
        backgroundColor: 'whitesmoke',
        width: 45,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBox: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchText: {
        fontWeight: '500',
    }
})