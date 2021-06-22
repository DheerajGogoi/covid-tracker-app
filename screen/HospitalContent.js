import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, Linking, ActivityIndicator } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { globalStyles } from '../style/globalStyles';
import { makeStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native-gesture-handler';
import Helpline from './Helpline';
import { Component } from 'react';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

export default function HospitalContent({ navigation }){

    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = "https://api.covid19india.org/resources/resources.json";
    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const result = await fetch(url);
                const response = await result.json();
                setPlace(response);
                setLoading(false);
            }
            catch (e) {
                console.log(e);
                setError(e);
            }
        }
        fetchCovidData();
    }, []);

    if (loading) return <View style={{backgroundColor: "#1c2732",flex: 1, justifyContent: 'center',flexDirection: 'row', justifyContent: 'space-around', padding: 10,}}><ActivityIndicator size="large" color="orange" /></View>;
    if (error) return <Text>Error!</Text>;

    const district = navigation.getParam('district');
    console.log(district);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Hospital Screen</Text>
            <View style={globalStyles.flatList}>
                <FlatList
                    data={place.resources}
                    renderItem={({item}) => {
                        if(item.city === district) {
                            return(
                                <Text>{item.nameoftheorganisation}</Text>
                            );
                        }
                    }} 
                />
            </View>
            <StatusBar style="light" hidden={false} backgroundColor="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1c2732",
    },
    header:{
        color: 'white',
    }
});