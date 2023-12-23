import { Marker } from 'react-native-maps'
import { View, StyleSheet, Text } from 'react-native'

const ChargePointMarkers = ({ chargePoints, mapRef, selectedId, setSelectedId }) => {
    
    const markerPress = (coordinate, id) => {
        setSelectedId(id)
        mapRef.current.animateCamera(
            { center: coordinate, zoom: 15 },
            { duration: 1000 }
        )
    }

    const markerColorSelector = (charge_point) => {
        if (charge_point.id === selectedId) 
            return styles.outlineGrey
        else if (charge_point.availability === 'inu')
            return styles.outlineYellow
        else if (charge_point.hasDC && charge_point.availability === 'ava')
            return styles.outlineGreen
        else if (charge_point.availability === 'ava')
            return styles.outlineBlue
    }

    return (
        <>
            {chargePoints.map(c =>
                <Marker
                    key={c.charge_point.id}
                    coordinate={{
                        latitude: c.charge_point.latitude,
                        longitude: c.charge_point.longitude,
                    }}
                    onPress={({ nativeEvent }) => markerPress(nativeEvent.coordinate, c.charge_point.id)}
                >
                    <View style={markerColorSelector(c.charge_point)}>
                        <View style={styles.markerDiv}>
                            <Text style={styles.markerText}>{c.charge_point_plugs.length}</Text>
                        </View>
                    </View>
                </Marker>
            )}
        </>
    )
}

export default ChargePointMarkers

const styles = StyleSheet.create({
    /* markerOutline: {
        borderRadius: 50,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    }, */
    outlineGrey: {
        borderRadius: 50,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.55)'
    },
    outlineBlue: {
        borderRadius: 50,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(3, 138, 255, 0.55)'
    },
    outlineGreen: {
        borderRadius: 50,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(144, 238, 144, 0.8)'
    },
    outlineYellow: {
        borderRadius: 50,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 252, 127, 1)'
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
    }
})