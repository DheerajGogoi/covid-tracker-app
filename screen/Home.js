import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { globalStyles } from '../style/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import RowItem from '../shared/RowItem';
import Country from './Country';
import Helpline from './Helpline';
import Hospital from './Hospital';
import RiskChecker from './RiskChecker';
import Info from './Info';
import { StatusBar } from 'expo-status-bar';

export default function Home( {navigation} ){

    const [place, setPlace] = useState([]);
    const url = "https://api.covid19api.com/summary";
    const [isLoading, setIsloading] = useState(false);
    const [error,setError] = useState();
    useEffect(() => {
        const fetchCovidData = async () => {
            setIsloading(true);
            try {
                const result = await fetch(url);
                const response = await result.json();
                setPlace(response);
                setIsloading(false);
                // console.log(place);
            }
            catch (e) {
                console.log(e)
                setError(e);
            }
        }
        fetchCovidData();
    }, []);       

    if (isLoading) return <View style={{backgroundColor: "#1c2732",flex: 1, justifyContent: 'center',flexDirection: 'row', justifyContent: 'space-around', padding: 10,}}><ActivityIndicator size="large" color="orange" /></View>;
    if (error) return <Text>Error!</Text>;

    const getVaccine = () => {
        Linking.openURL("https://selfregistration.cowin.gov.in/");
    }

    
    const result = place;
    return(
        <View style={globalStyles.homeContainer}>

            <View style={globalStyles.cards}>

                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        marginTop: 16,
                        marginBottom: -6,
                        backgroundColor: 'orange',
                        padding: 14,
                        borderRadius: 8,
                        width: '50%',
                        textAlign: 'center'
                    }}>Services</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={globalStyles.features}
                >
                    <TouchableOpacity style={globalStyles.fcard} onPress={() => navigation.navigate('Plasma')}>
                        <View>
                            <Entypo name="drop" size={32} color="white" />
                            <Text style={globalStyles.ftext}>Plasma help</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.fcard} onPress={() => navigation.navigate('Helpline')}>
                        <View>
                            <MaterialIcons name='phone' size={32} color="white"/>
                            <Text style={globalStyles.ftext}>Helpline Numbers</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.fcard} onPress={() => navigation.navigate('RiskChecker')}>
                        <View>
                            <FontAwesome5 name="shield-virus" size={32} color="white" />
                            <Text style={globalStyles.ftext}>Risk Checker</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.fcard} onPress={() => Linking.openURL(`tel:108`)}>
                        <View>
                            <FontAwesome5 name="ambulance" size={32} color="white" />
                            <Text style={globalStyles.ftext}>Call Ambulance</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={globalStyles.fcard} onPress={() => navigation.navigate('Hospital')}>
                        <View>
                            <FontAwesome5 name="hospital" size={32} color="white" />
                            <Text style={globalStyles.ftext} >Near by facilities</Text>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={globalStyles.fcard} onPress={getVaccine}>
                        <View>
                            <FontAwesome5 name="syringe" size={32} color="white" />
                            <Text style={globalStyles.ftext}>Get Vaccine</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.fcard} onPress={() => navigation.navigate('Country')}>
                        <View>
                            <Ionicons name="stats-chart" size={32} color="white" />
                            <Text style={globalStyles.ftext}>Country Stats</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={globalStyles.fcard} onPress={() => navigation.navigate('Info')} >
                        <View>
                            <MaterialIcons name="info-outline" size={32} color="white" />
                            <Text style={globalStyles.ftext}>COVID Protocols</Text>
                        </View>
                    </TouchableOpacity> */}
                </ScrollView>
            </View>

            <View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        marginTop: 38,
                        marginBottom: 10,
                        backgroundColor: 'orange',
                        padding: 14,
                        borderRadius: 8,
                        // width: '100%',
                        textAlign: 'center'
                    }}>Cofirmed Covid Cases by country</Text>
                </View>
            </View>
            <View style={globalStyles.flatList}>
                <FlatList
                    data={place && place.Countries ? place.Countries : 0}
                    // key={place.Countries.CountryCode}
                    renderItem={({item})=> <RowItem item={item} key={item.CountryCode}/> } 
                />
            </View>
            <StatusBar style="light" hidden={false} backgroundColor="black" />
        </View>
    );
}
