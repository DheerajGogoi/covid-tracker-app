import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons, Feather  } from '@expo/vector-icons';

// stacks
import HomeStack from './homeStack';
import CountryStack from './countryStack';
import HelplineStack from './helplineStack';
import PlasmaStack from './plasmaStack';
import SideBar from '../shared/SideBar';
import { Dimensions } from 'react-native';
import AboutStack from './aboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({

    
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Home',
            drawerIcon: ({tintColor}) => <AntDesign name="home" size={22} color="black" />
        }
    },
    Country: {
        screen: CountryStack,
        navigationOptions: {
            title: "India's stats",
            drawerIcon: ({tintColor}) => <AntDesign name="areachart" size={22} color="black" />
        }
    },
    CallHelp: {
        screen: HelplineStack,
        navigationOptions: {
            title: 'Helpline',
            drawerIcon: ({tintColor}) => <Feather name="phone-call" size={22} color="black" />
        }
    },
    Plasma: {
        screen: PlasmaStack,
        navigationOptions: {
            title: 'Plasma',
            drawerIcon: ({tintColor}) => <Entypo name="drop" size={22} color="black" />
        }
    },
    About: {
        screen: AboutStack,
        navigationOptions: {
            title: 'About',
            drawerIcon: ({tintColor}) => <Feather name="info" size={22} color="black" />
        }
    },
},{
    contentComponent: props => <SideBar {...props} />,

    // hideStatusBar: true,
    contentOptions: {
        // activeBackgroundColor: '',
        activeTintColor: 'orange',
        itemsContainerStyle: {
            // marginHorizontal: 8
        },
        itemSyle: {
            boderRadius: 4
        }
    }
});

export default createAppContainer(RootDrawerNavigator);