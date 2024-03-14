import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import SortScreen from '../screens/SortScreen';
import DisplayScreen from '../screens/DisplayScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = focused ? size - 1 : size - 4;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'circle'; 
          } else if (route.name === 'Display') {
            iconName = focused ? 'search' : 'circle';
          } else if (route.name === 'User') {
            iconName = focused ? 'user' : 'circle';
          }

          return <Icon name={iconName} size={iconSize} color={color} />;
        },
        
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { marginTop: -6, marginBottom: 6},
        tabBarActiveBackgroundColor:'black',
        tabBarStyle: { backgroundColor: '#141517' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: 'tomato' } }} />
      <Tab.Screen name="Display" component={DisplayScreen} options={{ headerStyle: { backgroundColor: 'tomato' } }} />
      <Tab.Screen name="User" component={UserScreen} options={{ headerStyle: { backgroundColor: 'tomato' } }}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
