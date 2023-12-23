import axios from 'axios'

//const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY_HERE'

//enable google distance matrix api from google maps first
const getTimeAndDistance = async (userLocation, chargePoint) => {

    matrixUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${chargePoint.latitude},${chargePoint.longitude}&origins=${userLocation.latitude},${userLocation.longitude}&units=metric&key=${GOOGLE_MAPS_API_KEY}`

    const response = await axios.get(matrixUrl)
    
    const distanceInMeters = response.data.rows[0].elements[0].distance.value
    const timeInSeconds = response.data.rows[0].elements[0].duration.value

    //returns distance in km rounded to 2 decimal points and time in min 
    return {
        distance: (distanceInMeters/1000).toFixed(2),
        time: Math.round(timeInSeconds/60)
    }
}

export default getTimeAndDistance