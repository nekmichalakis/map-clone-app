import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

const DetailsBottom = () => {
  return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity style={styles.chargingBox}>
                <Ionicons name='battery-charging' color='white' size={26} />
                <Text style={styles.chargeText}>Start Charging</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
            <TouchableOpacity style={styles.scanBox}>
                <Ionicons name='scan-circle-outline' color='black' size={26} />
                <Text>Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookingBox}>
                <Ionicons name='calendar-outline' color='black' size={24} />
                <Text style={styles.bookingText}>Booking</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailsBottom

const styles = StyleSheet.create({
    container: {
        width: width,
        borderTopColor: 'lightgrey',
        borderTopWidth: 3,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 5,
        backgroundColor: 'white'
    },
    chargingBox: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        gap: 5
    },
    chargeText: {
        color: 'white'
    },
    bottomRow: {
        flexDirection: 'row',
        height: 42,
        gap: 5
    },
    scanBox: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderColor: 'black',
        borderWidth: 1
    },
    bookingBox: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'lightgrey',
        gap: 5
    },
    bookingText: {
        fontWeight: '500'
    }
})