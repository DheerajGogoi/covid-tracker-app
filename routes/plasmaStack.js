import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Plasma from '../screen/Plasma';
import SearchDoners from '../screen/SearchDoners';
import SearchRequests from '../screen/SearchRequests';
import RegisterDoner from '../screen/RegisterDoner';
import Header from '../shared/Header'

const screens = {
    Plasma: {
        screen: Plasma,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Plasma Help' navigation={navigation} />
            }
        }
    },
    SearchDoners: {
        screen: SearchDoners,
        navigationOptions: {
            title: 'Plasma Doners',
        },
    },
    SearchRequests: {
        screen: SearchRequests,
        navigationOptions: {
            title: 'Requests for Plasma',
        },
    },
    RegisterDoner: {
        screen: RegisterDoner,
        navigationOptions: {
            title: 'Register as a Doner',
        },
    },
}

const PlasmaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: '#1A3255',
        },
        headerTintColor: 'orange',
    },
    
});
export default PlasmaStack;