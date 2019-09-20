import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';

const navigator = createStackNavigator({
    home: {
        screen: HomeScreen,
    }
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    });


const AppNavigator = createAppContainer(navigator)
export default AppNavigator;