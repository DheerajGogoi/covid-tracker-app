import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../style/globalStyles';
import StateRows from '../shared/StateRows';
import { StatusBar } from 'expo-status-bar';


export default function Country( {navigation} ){

    const [place, setPlace] = useState([]);
    const url = "https://api.rootnet.in/covid19-in/stats/latest";
    // https://api.rootnet.in/covid19-in/stats/latest
    // https://api.covid19api.com/live/country/india
    const [isLoading, setIsloading] = useState(false);
    const [error,setError] = useState();
    useEffect(() => {
        const fetchCovidData = async () => {
            setIsloading(true);
            try {
                const result = await fetch(url);
                const response = await result.json();
                setPlace(response.data.regional)
                setIsloading(false);
                // console.log(response.data.regional);
            }
            catch (e) {
                console.log(e)
                setError(e);
            }
        }
        fetchCovidData();
    }, [])

    if (isLoading) return <View style={{backgroundColor: "#1c2732",flex: 1, justifyContent: 'center',flexDirection: 'row', justifyContent: 'space-around', padding: 10,}}><ActivityIndicator size="large" color="orange" /></View>;
    if (error) return <Text>Error!</Text>;
    
    return(
        <View style={styles.countryContainer}>
            <Text style={globalStyles.casesHeading}>India's state wise COVID cases</Text>
            <View style={styles.statsContainer}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>Active</Text>
                <Text style={{color: 'green', fontWeight: 'bold'}}>Recovered</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Deceased</Text>
                <Text style={{color: 'red', fontWeight: 'bold'}}>Confirmed</Text>
            </View>
            <View style={styles.flatList}>
                <FlatList 
                    data={place && place ? place : 0}
                    // key={place.Confirmed}
                    renderItem={({item})=> <StateRows item={item}/> } 
                />
            </View>
            <StatusBar style="light" hidden={false} backgroundColor="black" />
        </View>
    );
}


const styles = StyleSheet.create({
    countryContainer: {
        flex: 1,
        backgroundColor: "#1c2732",
    },
    flatList: {
        // flex: 1,
    },
    statsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 10
    }
});

// https://api.covid19api.com/live/country/india