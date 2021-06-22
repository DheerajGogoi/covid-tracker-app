import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Helpline from '../screen/Helpline';
import Header from '../shared/Header'

const screens = {
    Helpline: {
        screen: Helpline,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Helpline Numbers' navigation={navigation} />
            }
        }
    }
}

const HelplineStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: '#1A3255',
        },
        headerTintColor: 'orange',
    },
    
});
export default HelplineStack;