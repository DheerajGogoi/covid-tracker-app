import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screen/Home';
import Hospital from '../screen/Hospital';
import HospitalContent from '../screen/HospitalContent';
import Info from '../screen/Info';
import RiskChecker from '../screen/RiskChecker';
import Header from '../shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='COVID-19 Tracker' navigation={navigation} />
            }
        }
    },
    Hospital: {
        screen: Hospital,
        navigationOptions: {
            title: 'Health facilities Near Me',
        }
    },
    HospitalContent: {
        screen: HospitalContent,
        navigationOptions: {
            title: 'Hospitals facilities Near Me',
        }
    },
    RiskChecker: {
        screen: RiskChecker,
        navigationOptions: {
            title: 'COVID Risk Checker',
        }
    },
    Info: {
        screen: Info,
        navigationOptions: {
            title: 'COVID Info and FAQs',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: '#1A3255',
        },
        headerTintColor: 'orange',
    },
    
});
export default HomeStack;