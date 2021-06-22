import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons, AntDesign, Fontisto, Entypo, Foundation, Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../style/globalStyles';
import StateRows from '../shared/StateRows';
import { ScrollView } from 'react-native-gesture-handler';
import DonerForm from './DonerForm';
import { StatusBar } from 'expo-status-bar';


export default function RegisterDoner( {navigation} ){
    
    return(
        <View style={styles.container}>
            <DonerForm />
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
    donerCard: {
        padding: 14,
        backgroundColor: 'orange',
        borderRadius: 5,
        marginBottom: 10,
    }
});
