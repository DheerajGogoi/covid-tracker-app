import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function StateRows({ item }){
    return (
        <View style={styles.rows}>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={styles.statesContainer}>
                    <Text style={styles.province}>{item.loc}</Text>
                    <View style={styles.stats}>
                        <Text style={{color: 'red', fontWeight: 'bold', paddingLeft: 10,}}>{item.totalConfirmed-(item.discharged + item.deaths)}</Text>
                        <Text style={{color: 'green', fontWeight: 'bold'}}>{item.discharged}</Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{item.deaths}</Text>
                        <Text style={{color: 'red', fontWeight: 'bold', paddingRight: 10,}}>{item.totalConfirmed}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    province: {
        backgroundColor: '#C7EAFF',
        flexDirection: 'row',
        padding: 4,
        paddingLeft: 10,
    },
    statesContainer: {
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%',
    },
    rows: {
        marginBottom: 12,
        marginTop: 10,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
    }
});