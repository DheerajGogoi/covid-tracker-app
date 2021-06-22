import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import { globalStyles } from '../style/globalStyles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function Helpline( {navigation} ){
    
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Important Helpline numbers for emergency</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.numbersContainer}>
                
                <TouchableOpacity style={styles.numbersCard} onPress={() => Linking.openURL(`tel:1075`)}>
                    <AntDesign name="customerservice" size={50} color="black" />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>Health Ministiry Helpline</Text>
                        <Text style={styles.detailsText}><Ionicons name="call" size={18} color="black" /> 1075</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numbersCard} onPress={() => Linking.openURL(`tel:1098`)}>
                    <FontAwesome5 name="child" size={50} color="black" />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>Child Helpline</Text>
                        <Text style={styles.detailsText}><Ionicons name="call" size={18} color="black" /> 1098</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numbersCard} onPress={() => Linking.openURL(`tel:08046110007`)}>
                    <MaterialCommunityIcons name="head-check-outline" size={50} color="black" />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>Mental Health Helpline</Text>
                        <Text style={styles.detailsText}><Ionicons name="call" size={18} color="black" /> 08046110007</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numbersCard} onPress={() => Linking.openURL(`tel:14567`)}>
                    <Ionicons name="people-sharp" size={50} color="black" />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>Senior Citizen Helpline</Text>
                        <Text style={styles.detailsText}><Ionicons name="call" size={18} color="black" /> 14567</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numbersCard} onPress={() => Linking.openURL(`tel:14443`)}>
                    <Entypo name="leaf" size={50} color="black" />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>Aayush COVID-19 counselling{"\n"}helpline</Text>
                        <Text style={styles.detailsText}><Ionicons name="call" size={18} color="black" /> 14443</Text>
                    </View>
                    {/*   */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.numbersCard} onPress={() => Linking.openURL(`tel:9013151515`)}>
                    <Ionicons name="md-logo-whatsapp" size={50} color="black" />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>MyGov Whatsapp helpdesk</Text>
                        <Text style={styles.detailsText}><Ionicons name="call" size={18} color="black" /> 9013151515</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <StatusBar style="light" hidden={false} backgroundColor="black" />
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
    numbersContainer: {
        flex: 1,
        marginTop: 20,
        paddingLeft: 6,
        paddingRight: 6,
    },
    numbersCard: {
        backgroundColor: '#C7EAFF',
        padding: 20,
        marginBottom: 20,
        borderRadius: 6,
        flexDirection: 'row'
    },
    details: {
        paddingLeft: 20,
        
    },
    detailsText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
    }
})
