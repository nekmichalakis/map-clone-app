import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps'

import chargerService from '../../services/chargers'
import { getUserLocation } from '../../utils/mapHelper'
import mapStyle from '../../utils/mapStyle'

import ChargePointMarkers from './ChargePointMarkers'
import HorizontalList from './HorizontalList'
import StickyList from './StickyList'
import TopBar from './TopBar'

const INITIAL_REGION = {
    latitude: 38.006411,
    longitude: 23.797199,
    latitudeDelta: 0.01144,
    longitudeDelta: 0.007548
  }

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState()
  const [chargePoints, setChargePoints] = useState([])
  const [currentRegion, setCurrentRegion] = useState(INITIAL_REGION)
  const [selectedId, setSelectedId] = useState()

  const mapRef = useRef()

  useEffect(() => {
    getUserLocation().then(res => setUserLocation(res))
  }, [])
  useEffect(() => {
    chargerService.getChargePoints(currentRegion).then(res => setChargePoints(res))
  }, [currentRegion])

  const handleRegionChange = (region, gesture) => {
    if (gesture.isGesture) {
      setCurrentRegion(region)
    }
  }

  return (
    /* <SafeAreaView style={{flex: 1}}> */
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          region={/* userLocation ? userLocation : */ INITIAL_REGION}
          showsUserLocation
          customMapStyle={mapStyle}
          onRegionChangeComplete={handleRegionChange}
          ref={mapRef}
        >
          <ChargePointMarkers
            chargePoints={chargePoints}
            mapRef={mapRef}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </MapView>
        <TopBar />
        <HorizontalList
          chargePoints={chargePoints}
          userLocation={userLocation}
          mapRef={mapRef}
          setSelectedId={setSelectedId}
        />
        <StickyList userLocation={userLocation} mapRef={mapRef} />
      </View>
    /* </SafeAreaView> */
  )
}

export default MapComponent

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})