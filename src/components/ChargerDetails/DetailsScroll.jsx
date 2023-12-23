import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'

import PlugSvg from '../../../assets/svg/PlugSvg'

const { height } = Dimensions.get('window')

const DetailsScroll = ({ plugs }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Select Charging Point :</Text>
        {plugs.map((p, index) => 
            <View style={styles.stationContainer} key={index}>
                <Text style={styles.stationHeader}>Station {index + 1}</Text>
                <View style={styles.detailsRow}>
                    <View style={styles.plugContainer}>
                        <View style={styles.plugBox}>
                            <PlugSvg />
                        </View>
                    </View>
                    <View style={styles.detailsBox}>
                        <View style={styles.detailsHeader}>
                            <Text style={styles.typeText}>
                                {(p.charging_facilities.power_type === 'AC_3_PHASE') ? 'AC Type 2' : 'DC'} /
                            </Text>
                            {(p.status === 'ava') &&
                                <Text style={styles.availableText}>Available</Text>
                            }
                        </View>
                        <Text style={styles.middleText}>
                            Normal charger - up to 999 {/* wtf is this */}
                        </Text>
                        <Text style={styles.codeText}>
                            {p.externalId}
                        </Text>
                    </View>
                    <Text style={styles.priceText}>
                        {p.charge_point_pricing_product.charge_point_operator_pricing_plan.charge_point_operator_pricing_plan.value/100}
                        {p.charge_point_pricing_product.currency}/{p.charge_point_pricing_product.referenceUnit}
                    </Text>
                </View>
            </View>
        )}
      </ScrollView>
    </View>
  )
}

export default DetailsScroll

const styles = StyleSheet.create({
    container: {
        height: height * 0.4,
        marginHorizontal: 20,
        borderTopColor: 'lightgrey',
        borderTopWidth: 0.7,
        paddingTop: 20,
        paddingBottom: 40
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 15
    },
    stationContainer: {
        gap: 10,
        marginBottom: 25
    },
    stationHeader: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 10
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10
    },
    plugContainer: {
        justifyContent:'center',
        alignItems: 'center',
    },
    plugBox: {
        borderColor: 'lightblue',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 45,
        height: 45,
        justifyContent:'center',
        alignItems: 'center',
    },
    detailsBox: {
        flex: 1,
        gap: 2
    },
    detailsHeader: {
        flexDirection: 'row',
    },
    typeText: {
        fontSize: 16,
        fontWeight: '500',
    },
    availableText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'green'
    },
    middleText: {
        fontSize: 15,
        fontWeight: '400',
        color: 'grey'
    },
    codeText: {
        fontSize: 12
    },
    priceText: {
        color: 'grey'
    }
})