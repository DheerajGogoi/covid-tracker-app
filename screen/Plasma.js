import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons, Entypo, FontAwesome, Octicons } from '@expo/vector-icons';
import { globalStyles } from '../style/globalStyles';
import Paper from '@material-ui/core/Paper';
import { ScrollView } from 'react-native-gesture-handler';
import RowItem from '../shared/RowItem';
import Country from './Country';
import Helpline from './Helpline';
import { colors, withTheme } from '@material-ui/core';
import RequestForm from './RequestForm';
import Unorderedlist from 'react-native-unordered-list';
import { StatusBar } from 'expo-status-bar';


export default function Plasma( {navigation} ){
    
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <View style={styles.container}>
            
            <ScrollView>
                <Modal visible={modalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContainer}>
                            <MaterialIcons name='close' size={28} style={styles.closeIcon} onPress={() => setModalOpen(false)} />
                            <RequestForm />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <View>
                    <Text style={styles.header}>Request for plasma or search for doners</Text>
                    <View style={styles.aboutPlasma}>
                        <Text style={{color: 'white'}}>In these difficult times, we all must try our best to contribute towards a noble cause of protecting humanity and mankind in general.</Text>
                        
                        <Text style={{color: 'white', marginTop: 16}}>Why prefer Plasma ?</Text>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Plasma therapy is safer than the anti-inflammatory drugs currently being used because it provides covid specific therapy.  Since it is a natural human product, it is well tolerated by the human body and is less expensive. It is particularly useful for those who are immunodeficient and cannot generate an effective immune response on their own.</Text></Unorderedlist>

                        <Text style={{color: 'white', marginTop: 16}}>Why donate plasma ?</Text>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Plasma donation is a social contribution of saving the lives of many i.e., one is doing something good for the society by donating plasma.</Text></Unorderedlist>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Plasma donation does not harm the donor. It carries the same risk as blood transfusion.</Text></Unorderedlist>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Donors can donate more than once, based on their physical condition.</Text></Unorderedlist>
                        
                        <Text style={{color: 'white', marginTop: 16}}>Who can donate ?</Text>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Donors (recovered patients) can come forward after quarantine (about 24-28 days after onset of symptoms). Their antibodies are checked free of cost.</Text></Unorderedlist>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>If the antibody levels are good, they will be sent to the blood bank to donate plasma.</Text></Unorderedlist>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>The donor should not exhibit signs of the infection, should be out of the hospital and leading a normal life.</Text></Unorderedlist>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>The person wishing to donate must be Covid-negative in two consecutive RT-PCR tests.</Text></Unorderedlist>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Plasma donation is voluntary.</Text></Unorderedlist>
                        <Unorderedlist color='white' style={{fontSize: 18}}><Text style={{color: 'white'}}>Donors should be at least 18 years of age. Women who have never been pregnant and whose body weight is more than 55 kg, are eligible.</Text></Unorderedlist>
                    </View>
                </View>
                <View styles={styles.plasmaButtons}>
                    
                    <View style={styles.btnGrp}>
                        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('SearchDoners') } >
                            <FontAwesome style={{paddingRight: 20}} name="search" size={40} color="white" />
                            <Text style={styles.btnText}>Search for doners</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('SearchRequests') }>
                            <Octicons name="request-changes" size={40} color="white" /> 
                            <Text style={styles.btnText}>Search for requests</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.btnGrp}>
                        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('RegisterDoner') } >
                            <FontAwesome5 name="hand-holding-medical" size={40} color="white" /> 
                            <Text style={styles.btnText}>Register as a Plasma doner</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.btn} onPress={() => setModalOpen(true)}>
                            <Entypo name="add-user" size={40} color="white" /> 
                            <Text style={styles.btnText}>Post a Plasma Request</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
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
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 4,
        textAlign: 'center',
        marginTop: 14
    },
    aboutPlasma: {
        color: 'white',
        fontSize: 16,
        textAlign: 'justify',
        marginTop: 20,
        marginBottom: 20,
    },
    plasmaButtons: {
    },
    btn: {
        padding: 16,
        backgroundColor: 'green',
        // marginBottom: 20,
        borderRadius: 5,
        height: 150,
        width: 150,
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1c2732"
    },
    addIcon: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        color: 'skyblue',
    },
    closeIcon: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        color: 'skyblue',
        marginBottom: 20,
    },
    btnGrp: {
        flexDirection: 'row',
        marginBottom: 30,
        justifyContent: 'space-evenly',
        marginTop: 10,
    }
});
