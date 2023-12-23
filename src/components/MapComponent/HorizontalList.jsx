import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useCallback } from 'react'


import HorizontalListItem from './HorizontalListItem'

const { width, height } = Dimensions.get('window')
const ITEM_SIZE = width * 0.8
const SPACING = width * 0.02
const FULLSIZE = ITEM_SIZE + SPACING * 2

const viewabilityConfig = {
    waitForInteraction: true,
    minimumViewTime: 50,
    itemVisiblePercentThreshold: 90
}

const HorizontalList = ({ chargePoints, userLocation, mapRef, setSelectedId }) => {
    
    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        if (viewableItems.length === 1) {
            const viewedChargePoint = viewableItems[0].item.charge_point
            setSelectedId(viewedChargePoint.id)
            mapRef.current.animateCamera(
                { center: { latitude: viewedChargePoint.latitude, longitude: viewedChargePoint.longitude }, zoom: 13 },
                { duration: 500 }
            )
        }
    }, [])

    return (
        <View style={styles.listBox}> 
            <FlatList
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={onViewableItemsChanged}
                //viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                contentContainerStyle={{paddingLeft: width * 0.08}}
                data={chargePoints}
                horizontal
                snapToInterval={FULLSIZE}
                decelerationRate={0.86}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.charge_point.id}
                renderItem={({ item }) => (
                        <HorizontalListItem item={item} userLocation={userLocation} />
                )}
            />
        </View>
    )
}

export default HorizontalList

const styles = StyleSheet.create({
    listBox: {
        width: width,
        height: height * 0.24,
        position: 'absolute',
        bottom: height * 0.13,
        left: 0,
    }
})