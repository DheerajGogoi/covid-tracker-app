import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import About from '../screen/About';
import Header from '../shared/Header'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='About this app' navigation={navigation} />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: '#1A3255',
        },
        headerTintColor: 'orange',
    },
    
});
export default AboutStack;