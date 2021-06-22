import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import { MaterialIcons, AntDesign, Fontisto, Entypo, Foundation, Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../style/globalStyles';
import StateRows from '../shared/StateRows';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function SearchRequests( {navigation} ){

    const [requests, setRequests] = useState([]);
    const url = "https://covidtrackerapi.herokuapp.com/request/find";
    const [isLoading, setIsloading] = useState(false);
    const [error,setError] = useState();
    useEffect(() => {
        const fetchCovidData = async () => {
            setIsloading(true);
            try {
                const result = await fetch(url);
                const response = await result.json();
                setRequests(response);
                setIsloading(false);
                console.log(response);
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);

    if (isLoading) return <View style={{backgroundColor: "#1c2732",flex: 1, justifyContent: 'center',flexDirection: 'row', justifyContent: 'space-around', padding: 10,}}><ActivityIndicator size="large" color="orange" /></View>;
    if (error) return <Text>Error!</Text>;
    
    return(
        <View style={styles.container}>
            <ScrollView style={styles.donerCardContainer}>
                <FlatList
                    inverted
                    data={requests && requests ? requests : 0}
                    renderItem={ function({item}){
                        return(
                            <View style={styles.donerCard}>
                                <Text style={{backgroundColor: '#616161', padding: 14, borderTopRightRadius: 5, borderTopLeftRadius: 5, borderColor: 'black', borderWidth: 1, fontWeight: 'bold', color: 'white', fontSize: 15, borderBottomWidth: 0, }}>Request Posted on : {(new Date(item.createdAt).toString()).substring(0, 15)}</Text>
                                <View style={{padding: 14, borderColor: 'black', borderWidth: 1, backgroundColor: '#ACACAC', }}>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>- Patient's Name : {item.name} {item.sirname}</Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>- Patient's Age : {item.age}</Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>- Location : {item.district}</Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>- Patient's Message : {item.message}</Text>
                                </View>
                                <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.mobile}`)}>
                                    <Text style={{backgroundColor: '#616161', padding: 14, borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderColor: 'black', borderWidth: 1, borderTopWidth: 1, fontWeight: 'bold', textAlign: 'center', fontSize: 16, color: 'white' }}>
                                        <Ionicons name="call" size={18} color="white" /> Call : {item.mobile}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </ScrollView>
            <StatusBar style="light" hidden={false} backgroundColor="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1c2732",
        paddingTop: 30,
    },
    donerCard: {
        // padding: 14,
        // backgroundColor: 'orange',
        borderRadius: 5,
        marginBottom: 30,
    }
});
