import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { LinearGradient } from 'expo-linear-gradient'

import mapStyle from '../../utils/mapStyle'

const { height, width } = Dimensions.get('window')

const DetailsTop = ({ charger, navigation, distance }) => {
    const chargerRegion = {
        latitude: charger.charge_point.latitude,
        longitude: charger.charge_point.longitude,
        latitudeDelta: 0.01144,
        longitudeDelta: 0.007548
    }

  return (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            //provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            region={chargerRegion}
            scrollEnabled={false}
            zoomEnabled={false}
        >
            <Marker coordinate={{
                        latitude: charger.charge_point.latitude,
                        longitude: charger.charge_point.longitude,
                    }}
            >
                <View style={styles.outlineGrey}>
                    <View style={styles.markerDiv}>
                        <Text style={styles.markerText}>{charger.charge_point_plugs.length}</Text>
                    </View>
                </View>
            </Marker>
        </MapView>
        <View style={styles.topBox}>
            <LinearGradient
                colors={['transparent', 'rgba(255, 255, 255, 1)']}
                locations={[0.6, 0.7]}
                style={styles.linearGradient}
            />
            <View style={styles.topRow}>
                <TouchableOpacity
                    style={styles.closeBox}
                    onPress={navigation.goBack}
                >
                    <Ionicons name='close-outline' size={30} style={{ top: -1 }} />
                </TouchableOpacity>
                <View style={styles.rightIcons}>
                    <TouchableOpacity style={styles.iconBox}>
                        <Image style={styles.logo} source={require('../../../assets/deiLogo.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox}>
                        <Ionicons name='heart' color='white' size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox}>
                        <Ionicons name='map' color='white' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox}>
                        <Ionicons name='chatbubble' color='white' size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.bottomRow}>
            <Text style={styles.nameText}>{charger.charge_point_extra.street}</Text>
            <Text style={styles.addressText}>
                {charger.charge_point_extra.postal_code}
                , {charger.charge_point_extra.city}, {charger.charge_point_extra.country} • {distance} km away
            </Text>
            <Text style={styles.openText}>Open 24/7</Text>
        </View>
    </View>
  )
}

export default DetailsTop

const styles = StyleSheet.create({
    container: {
        height: height * 0.5,
        marginBottom: 12,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 80
    },
    topBox: {
        justifyContent: 'space-between',
        flex: 1,
    },
    linearGradient: {
        //flex: 1
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0

    },
    topRow: {
        marginTop: 50,
        paddingHorizontal: 20,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rightIcons: {
        flexDirection: 'row',
        gap: 7
    },
    logo: {
        borderRadius: 20,
        width: 35,
        height: 35,
    },
    closeBox: {
        height: 35,
        width: 35,
        backgroundColor: 'white',
        borderRadius: 70,
        borderColor: 'lightgrey',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBox: {
        height: 35,
        width: 35,
        backgroundColor: 'black',
        borderRadius: 70,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    bottomRow: {
        position: 'absolute',
        bottom: 0,
        gap: 8,
        marginHorizontal: 20,
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 22
    },
    addressText: {
        color: 'grey',
        fontSize: 13
    },
    openText: {
        color: 'deepskyblue',
        fontWeight: '400'
    },
    markerDiv: {
        backgroundColor: 'black',
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    markerText: {
        color: 'white',
        fontSize: 16,
        top: -1
    },
    outlineGrey: {
        borderRadius: 50,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.55)'
    }
})