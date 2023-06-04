import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './screens/HomeScreen';
import FriendsScreen from './screens/FriendsScreen';
import StatsScreen from './screens/StatsScreen';
import AccountScreen from './screens/AccountScreen';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer className="bg-[#180347]">
      <Tab.Navigator
        initialRouteName="Home"
        className="bg-[#180347]"
        screenOptions={({ route }) => ({ 
          headerShown: false,
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: '#89ECF6',
          tabBarInactiveTintColor: '#EDCCFF',
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#180347',
            position: 'absolute',
            borderTopWidth: 0,
        },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarColor: "#180347",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-variant" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Friends" 
          component={FriendsScreen} 
          options={{
            tabBarLabel: 'Friends',
            tabBarColor: "#180347",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-friends" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Stats" 
          component={StatsScreen} 
          options={{
            tabBarLabel: 'Stats',
            tabBarColor: "#180347",
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
            tabBarColor: "#180347",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
