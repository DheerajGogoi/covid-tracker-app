import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import { globalStyles } from '../style/globalStyles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Unorderedlist from 'react-native-unordered-list';


export default function About( {navigation} ){
    
    return(
        <View style={styles.container}>
            <StatusBar style="light" hidden={false} backgroundColor="black" />

            <Text style={{color: 'white'}}>Covid-19, an unprecedented event in the history of earth has undoubtedly put the entire mankind into back foot. As per reports, it in fact is a harbinger to many more pandemics in the near future.</Text>

            <Text style={{color: 'white', marginTop: 16}}>In these difficult times, we all must try our best to contribute towards a noble cause of protecting humanity and mankind in general.</Text>

            <Text style={{color: 'white', marginTop: 16}}>With this aim, we have created this application to facilitate the process of plasma donation among the people so that maximum number of people can benefit out of it.</Text>
                        
            <Text style={{color: 'white', marginTop: 16}}>Key features of this app:</Text>
            <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Shows Realtime live data of covid cases in various countries and also shows India's state wise covid updates</Text></Unorderedlist>
            <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>User can register him/her self as a doner and help others in need</Text></Unorderedlist>
            <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>People can post requests for plasma donations by entering some personal deatils that takes less than 5 min</Text></Unorderedlist>
            <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>All important emergency numbers are available, just click it and make your call</Text></Unorderedlist>
            <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>This app also redirects users to official COWIN vaccination registration website</Text></Unorderedlist>
            <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Users can do a quick COVID test by filling some details</Text></Unorderedlist>

            <Text style={{color: 'white', marginTop: 16}}>This app is designed and developed with ♥ by Dheeraj Gogoi</Text>

            <Text style={{color: 'white', marginTop: 16}}>Check the Menu bar for social links.</Text>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1c2732"
    },
    header: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        marginTop: 10,
        marginLeft: 8
    },
})
