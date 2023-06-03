import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
// import expoPushTokensApi from './api/expoPushTokens';

import HomeScreen from './screens/HomeScreen';
import StatsScreen from './screens/StatsScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createMaterialBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({
      projectId: '1ddc9f59-4b7d-4f74-9f21-6c21ce076fa4',
    })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
};

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  
  return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#89ECF6"
          inactiveColor="#EDCCFF"
          barStyle={{ backgroundColor: '#180347' }}
          shifting
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home-variant" size={35} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="Stats" 
            component={StatsScreen} 
            options={{
              tabBarLabel: 'Stats',
              tabBarIcon: ({ color }) => (
                <Entypo name="bar-graph" size={35} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="Account" 
            component={AccountScreen} 
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-alt" size={30} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
