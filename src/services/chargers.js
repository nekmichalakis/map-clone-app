import axios from 'axios'
import { Dimensions } from 'react-native'

const token = ''
const config = { headers: { 'X-AUTH-TOKEN': token } }

const region13Zoom = ({ latitude, longitude, latitudeDelta, longitudeDelta }) => {
    const lat1 = latitude + latitudeDelta/2
    const lat3 = latitude - latitudeDelta/2
    const long1 = longitude - longitudeDelta/2
    const long3 = longitude + longitudeDelta/2
    const zoom = Math.round(Math.log2(360 * (Dimensions.get('window').width / 256 / longitudeDelta))-2)

    return { latitude, longitude, lat1, lat3, long1, long3, zoom }
}

const getNearestCharger = async (inputRegion) => {
    const { latitude, longitude, lat1, lat3, long1, long3, zoom } = region13Zoom(inputRegion)

    const nearestUrl = `https://api.carge.co/api-public/charge-points-clustered?lat=${latitude}&long=${longitude}&lat1=${lat1}&long1=${long1}&long3=${long3}&lat3=${lat3}&zoomLevel=${zoom}`

    const response = await axios.get(nearestUrl, config)
    return response.data
}

const getChargePoints = async (inputRegion) => {
    const { latitude, longitude, lat1, lat3, long1, long3, zoom } = region13Zoom(inputRegion)

    const pointsUrl = `https://api.carge.co/api-public/charge-points-full-data/nearest?lat=${latitude}&long=${longitude}&lat1=${lat1}&long1=${long1}&long3=${long3}&lat3=${lat3}&zoomLevel=${zoom}`
    
    const response = await axios.get(pointsUrl, config)
    return response.data.charge_points
}

export default { getNearestCharger, getChargePoints }