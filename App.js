import React, {Component} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginPage } from './pages/loginPage';
import { SettingPage } from './pages/settingPage';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TimerHome } from './pages/timerHome';
import { AchievementPage } from './pages/achievementPage';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            //List of icons name:
            //https://icons.expo.fyi/
            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Achievement'){
              iconName = 'ios-journal';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={TimerHome} />
        <Tab.Screen name="Achievement" component={AchievementPage} />
        <Tab.Screen name="Settings" component={SettingPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}








