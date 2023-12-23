import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { getDistance } from '../../utils/mapHelper'

import PlugSvg from '../../../assets/svg/PlugSvg'

const StickyListItem = ({ item, userLocation }) => {
    const navigation = useNavigation()

    const availableChargers = item.charge_point_plugs.filter(c => c.status === 'ava').length
    const more = availableChargers - 2
    const distanceFromUser = getDistance(
        userLocation.latitude, userLocation.longitude, item.charge_point.latitude, item.charge_point.longitude
    )

    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('ChargerDetails', { charger: item, distance: distanceFromUser })}
        >
            <View style={styles.topRow}>
                <View style={styles.titleImg}>
                    <Image style={styles.logo} source={require('../../../assets/deiLogo.png')} />
                    <Text style={styles.title}>{item.charge_point_extra.street}</Text>
                </View>
                <View style={styles.priceBox}>
                    <Text style={styles.priceText}>
                        {` ${item.charge_point_operator_pricing_plan.charge_point_operator_pricing_plan.value / 100}${item.charge_point_operator_pricing_plan.charge_point_operator_pricing_plan.currency}`}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomRow}>
                <View style={styles.plugMore}>
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
                        {(more > 0) ? <Text style={styles.moreText}>{`+${more} more`}</Text> : null}
                    </View>
                </View>
                <View style={styles.distanceBox}>
                    <Text style={styles.distanceText}>{distanceFromUser}</Text>
                    <Text style={styles.kmText}>km</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default StickyListItem

const styles = StyleSheet.create({
    itemContainer: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.7
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
        width: 30,
        height: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    plugMore: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 45
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
    moreText: {
        fontSize: 13
    },
    priceBox: {
        borderRadius: 10,
        backgroundColor: 'black',
        paddingHorizontal: 7,
        paddingVertical: 6,
        flexDirection: 'row'
    },
    priceText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    distanceBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    distanceText: {
        fontWeight: 'bold',
        fontSize:  15,
        marginHorizontal: 5
    },
    kmText: {
        fontWeight: '300',
        fontSize: 14
    }
})