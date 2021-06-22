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


export default function Hospital( {navigation} ){

    const [district, setDistrict] = useState('-Select District-');
    const [category, setCategory] = useState('Select category');

    const search = () => {
        if(district === '-Select District-') {
            Alert.alert('Error', "Please select a valid district", [
                {text: 'Ok', onPress: () => console.log('Alert Closed')}
            ])
        } else {
            navigation.navigate('HospitalContent', {district});
        }
    }

    return(
        <View style={styles.container}>
            <View style={{backgroundColor: 'skyblue', width: '70%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', borderColor: 'black', borderWidth: 3, borderRadius: 10, marginTop: 10,}}>
                <Picker
                    selectedValue={district}
                    style={{ height: 50, width: 250 }}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setDistrict(itemValue)}
                >
                    <Picker.Item label="-Select District-" value="-Select District-" />
                    <Picker.Item label= 'Baksa' value= 'Baksa'/>
                    <Picker.Item label= 'Barpeta' value= 'Barpeta'/>
                    <Picker.Item label= 'Biswanath' value= 'Biswanath'/>
                    <Picker.Item label= 'Bongaigaon' value= 'Bongaigaon'/>
                    <Picker.Item label= 'Cachar' value= 'Cachar'/>
                    <Picker.Item label= 'Charaideo' value= 'Charaideo'/>
                    <Picker.Item label= 'Chirang' value= 'Chirang'/>
                    <Picker.Item label= 'Darrang' value= 'Darrang'/>
                    <Picker.Item label= 'Dhemaji' value= 'Dhemaji'/>
                    <Picker.Item label= 'Dhubri' value= 'Dhubri'/>
                    <Picker.Item label= 'Dibrugarh' value= 'Dibrugarh'/>
                    <Picker.Item label= 'Dima Hasao (North Cachar Hills)' value= 'Dima Hasao (North Cachar Hills)'/>
                    <Picker.Item label= 'Goalpara' value= 'Goalpara'/>
                    <Picker.Item label= 'Golaghat' value= 'Golaghat'/>
                    <Picker.Item label= 'Hailakandi' value= 'Hailakandi'/>
                    <Picker.Item label= 'Hojai' value= 'Hojai'/>
                    <Picker.Item label= 'Jorhat' value= 'Jorhat'/>
                    <Picker.Item label= 'Kamrup' value= 'Kamrup'/>
                    <Picker.Item label= 'Kamrup Metropolitan' value= 'Kamrup Metropolitan'/>
                    <Picker.Item label= 'Karbi Anglong' value= 'Karbi Anglong'/>
                    <Picker.Item label= 'Karimganj' value= 'Karimganj'/>
                    <Picker.Item label= 'Kokrajhar' value= 'Kokrajhar'/>
                    <Picker.Item label= 'Lakhimpur' value= 'Lakhimpur'/>
                    <Picker.Item label= 'Majuli' value= 'Majuli'/>
                    <Picker.Item label= 'Morigaon' value= 'Morigaon'/>
                    <Picker.Item label= 'Nagaon' value= 'Nagaon'/>
                    <Picker.Item label= 'Nalbari' value= 'Nalbari'/>
                    <Picker.Item label= 'Sivasagar' value= 'Sivasagar'/>
                    <Picker.Item label= 'Sonitpur' value= 'Sonitpur'/>
                    <Picker.Item label= 'South Salamara-Mankachar' value= 'South Salamara-Mankachar'/>
                    <Picker.Item label= 'Tezpur' value= 'Tezpur'/>
                    <Picker.Item label= 'Tinsukia' value= 'Tinsukia'/>
                    <Picker.Item label= 'Udalguri' value= 'Udalguri'/>
                    <Picker.Item label= 'West Karbi Anglong' value= 'West Karbi Anglong'/>
                </Picker>
            </View>

            <View style={{width: '70%', alignSelf: 'center', marginTop: 24}}>
                <Button style={styles.submitBtn} title='Search' color='maroon' onPress={search} />
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
    },
    paragraph: {
        color: 'white'
    }
});