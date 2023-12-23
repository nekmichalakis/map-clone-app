import * as Location from 'expo-location'

export const getCornerCoords = ({latitude, longitude, latitudeDelta, longitudeDelta}) => {
    const topLeft = {
        latitude: latitude - latitudeDelta/2,
        longitude: longitude - longitudeDelta/2
    }
    const bottomRight = {
        latitude: latitude + latitudeDelta/2,
        longitude: longitude + longitudeDelta/2
    }

    return {topLeft, bottomRight}
}

 export const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
        console.log('location permission denied')
        return
    }

    const { coords } = await Location.getCurrentPositionAsync({})
    
    return {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.01144,
        longitudeDelta: 0.007548
    }
}

export const getDistance = (latA, lonA, latB, lonB) => {
    const R = 6371
    const dLat = deg2rad(latB - latA)
    const dLon = deg2rad(lonB - lonA)
    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(latA)) * Math.cos(deg2rad(latB)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return Math.round(R * c * 100) / 100
}

const deg2rad = (deg) => deg * (Math.PI/180) 