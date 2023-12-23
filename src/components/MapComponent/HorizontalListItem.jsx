import { Dimensions, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { getDistance } from '../../utils/mapHelper'

import HeartSvg from '../../../assets/svg/HeartSvg'
import PlugSvg from '../../../assets/svg/PlugSvg'

const { width } = Dimensions.get('window')
const ITEM_SIZE = width * 0.8
const SPACING = width * 0.02

const HorizontalListItem = ({ item, userLocation }) => {
    const navigation = useNavigation()

    const availableChargers = item.charge_point_plugs.filter(c => c.status === 'ava').length
    const more = availableChargers - 2
    const distanceFromUser = getDistance(
        userLocation?.latitude, userLocation?.longitude, item.charge_point.latitude, item.charge_point.longitude
    )

    return (
        /* <View style={styles.itemContainer}> */
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigation.navigate('ChargerDetails', { charger: item, distance: distanceFromUser })}
            >
                <View style={styles.topRow}>
                    <View style={styles.titleImg}>
                        <Image style={styles.logo} source={require('../../../assets/deiLogo.png')} />
                        <Text style={styles.title}>{item.charge_point_extra.street}</Text>
                    </View>
                    <View style={styles.heartBox}>
                        <HeartSvg />
                    </View>
                </View>
                <View style={styles.middleRow}>
                    <View style={styles.plugBox}>
                        <PlugSvg />
                    </View>
                    {(availableChargers > 1)
                        ?
                        <View style={styles.plugBox}>
                            <PlugSvg />
                        </View>
                        : 
                        null
                    }
                    <View>
                        {(more > 0) ? <Text>+{more} more</Text> : null}
                        <Text>{`(${availableChargers}/${item.charge_point_plugs.length} available)`}</Text>
                    </View>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.distanceBox}>
                        {userLocation && <Text style={styles.distanceText}>{distanceFromUser}</Text>}
                        <Text style={styles.kmText}>km</Text>
                    </View>
                    <View style={styles.priceBox}>
                        <Text style={styles.chargeText}>Charge at</Text>
                        <Text style={styles.priceText}>
                            {item.charge_point_operator_pricing_plan.charge_point_operator_pricing_plan.value / 100}
                            {item.charge_point_operator_pricing_plan.charge_point_operator_pricing_plan.currency}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        /* </View > */
    )
}

export default HorizontalListItem

const styles = StyleSheet.create({
    itemContainer: {
        width: ITEM_SIZE,
        marginHorizontal: SPACING,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    titleImg: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logo: {
        borderRadius: 20,
        width: 35,
        height: 35
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10
    },
    heartBox: {
        justifyContent: 'center',
        padding: 5,
    },
    middleRow: {
        flexDirection: 'row',
        paddingLeft: 30,
        padding: 10,
        alignItems: 'center'
    },
    plugBox: {
        borderColor: 'lightblue',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems: 'center',
        marginRight: 10
    },
    bottomRow: {
        flexDirection: 'row',
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
        justifyContent: 'space-between',
        padding: 10
    },
    priceBox: {
        borderRadius: 7,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 12,
        flexDirection: 'row'
    },
    chargeText: {
        color: 'white',
        opacity: 0.5,
        fontSize: 16,
        fontWeight: '400',
        marginHorizontal: 3
    },
    priceText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    distanceBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    distanceText: {
        fontWeight: 'bold',
        fontSize:  16,
        marginHorizontal: 5
    },
    kmText: {
        fontWeight: '300'
    }
})