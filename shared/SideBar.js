import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { DrwaerNavigatiotItems } from "react-navigation-drawer";
import { Entypo, AntDesign, Foundation, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import style from "react-native-datepicker/style";
{/* <Entypo name="home" size={24} color="black" /> */}

export default function SideBar(props){
    return(
        <ScrollView>
            <Image style={styles.coronaimg} source={require('../assets/coronavirus.png')} />
            <View>
                <DrawerNavigatorItems {...props} />
            </View>
            <View style={styles.creditContainer}>
                <Text style={styles.name}>Designed and developed with ♥ by Dheeraj Gogoi</Text>
                <View style={styles.mediaContainer}>
                    
                    <TouchableOpacity style={styles.mediaCard} onPress={() => Linking.openURL("https://www.linkedin.com/in/dheeraj-gogoi-68337b1b5/")}>
                        <AntDesign style={styles.media} name="linkedin-square" size={22} color="black" />
                        <Text style={styles.mediaLabel}>@Dheeraj Gogoi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaCard} onPress={() => Linking.openURL("https://github.com/DheerajGogoi")}>
                        <AntDesign style={styles.media} name="github" size={22} color="black" />
                        <Text style={styles.mediaLabel}>@DheerajGogoi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaCard} onPress={() => Linking.openURL("https://dheerajgogoi.github.io")}>
                        <MaterialIcons style={styles.media} name="web" size={24} color="black" />
                        <Text style={styles.mediaLabel}>dheerajgogoi.github.io</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaCard} onPress={() => Linking.openURL(`tel:7099485845`)}>
                        <Ionicons style={styles.media} name="call" size={22} color="black" />
                        <Text style={styles.mediaLabel}>+91 7099495945</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaCard} onPress={() => Linking.openURL(`mailto:dheerajgogoi2@gmail.com`)}>
                        <Entypo style={styles.media} name="mail" size={22} color="black" />
                        <Text style={styles.mediaLabel}>dheerajgogoi2@gmail.com</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    coronaimg: {
        width: "100%",
        height: 200,
        marginTop: 24,
    },
    creditContainer: {
        marginTop: 2,
        paddingLeft: 20,
        borderTopWidth: 2,
        paddingTop: 20,
    },
    name: {
        fontWeight: 'bold'
    },
    mediaContainer: {
        // flexDirection: 'row',
        marginTop: 20,
    },
    media: {
        marginRight: 10,
    },
    mediaCard: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    mediaLabel: {
        fontSize: 14
    }

});