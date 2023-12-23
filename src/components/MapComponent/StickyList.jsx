import { Text, View, StyleSheet, Dimensions } from 'react-native'
import BottomSheet, { BottomSheetFlatList }  from '@gorhom/bottom-sheet'
import { useMemo, useEffect, useState } from 'react'

import chargerService from '../../services/chargers'

import StickyListItem from './StickyListItem'

const { height } = Dimensions.get('window')

const StickyList = ({ userLocation, mapRef }) => {
    const snapPoints = useMemo(() => ['12%', '34%', '100%'], [])
    const [stickyListArray, setStickyListArray] = useState([])

    useEffect(() => {
        if (userLocation)
            chargerService.getChargePoints(userLocation).then(res => setStickyListArray(res))
    }, [userLocation])

    return (
        <BottomSheet
            snapPoints={snapPoints}
            enablePanDownToClose={false}
            handleComponent={() => {
                return <View style={styles.handleBox}>
                            <View style={styles.line}></View>
                            <Text style={styles.handleText}>10 nearby charging stations</Text>
                        </View>
            }}
            backdropComponent={null}
            index={1}
        >
            <View style={{flex: 1}}>
                <BottomSheetFlatList
                    data={stickyListArray}
                    keyExtractor={(item) => item.charge_point.id}
                    renderItem={({ item }) => (
                        <StickyListItem item={item} userLocation={userLocation} />
                    )}
                />
            </View>
        </BottomSheet>
    )
}

export default StickyList

const styles = StyleSheet.create({
    handleBox: {
        backgroundColor: '#060C0C',
        alignItems: 'center',
        height: height * 0.12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
    },
    handleText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        paddingTop: 10
    },
    line: {
        width: 40,
        height: 3,
        backgroundColor: 'white',
        borderRadius: 5,
    }
})