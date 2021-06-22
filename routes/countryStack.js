import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Country from '../screen/Country';
import Header from '../shared/Header'

const screens = {
    Country: {
        screen: Country,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title="India's Stats" navigation={navigation} />
            }
        }
    }
}

const CountryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: '#1A3255',
        },
    },
});
export default CountryStack;