import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './screens/HomeScreen';
import StatsScreen from './screens/StatsScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createMaterialBottomTabNavigator();

const color = () => {

}

export default function App() {
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
