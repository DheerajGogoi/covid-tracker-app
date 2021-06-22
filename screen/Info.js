import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, Linking, ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { globalStyles } from '../style/globalStyles';
import { makeStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native-gesture-handler';
import Helpline from './Helpline';
import HospitalContent from './HospitalContent';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import {Picker} from '@react-native-picker/picker';
import YoutubePlayer from 'react-native-youtube-iframe';


export default function Info( {navigation} ){

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    marginBottom: 35
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        marginTop: 6,
                        marginBottom: -6,
                        backgroundColor: 'orange',
                        padding: 14,
                        borderRadius: 8,
                        width: '50%',
                        textAlign: 'center'
                    }}>Important Videos</Text>
                </View>
                
                <Text style={{color: 'white', marginBottom: 10, fontSize: 16}}>FAQs related to COVID-19</Text>
                <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={'hMopOpiNB1s'}
                />

                <Text style={{color: 'white', marginBottom: 10, fontSize: 16}}>Important pandemic Protocols</Text>
                <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={'xVu_I6WCsto'}
                />

                <Text style={{color: 'white', marginBottom: 10, fontSize: 16}}>Wash Your hands properly</Text>
                <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={'Br4sQmiJ1jU'}
                />
                
                <Text style={{color: 'white', marginBottom: 10, fontSize: 16}}>Get Vaccinated</Text>
                <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={'uWGTciX795o'}
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
    },
    header:{
        color: 'white',
    },
    paragraph: {
        color: 'white'
    }
});