import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'

import DetailsTop from './DetailsTop'
import DetailsScroll from './DetailsScroll'
import DetailsBottom from './DetailsBottom'

const { height } = Dimensions.get('window')

const ChargerDetails = ({ navigation, route }) => {
    const { charger, distance } = route.params

  return (
    <View style={styles.container}>
        <DetailsTop charger={charger} navigation={navigation} distance={distance} />
        <DetailsScroll plugs={charger.charge_point_plugs} />
        <DetailsBottom />
    </View>
  )
}

export default ChargerDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})