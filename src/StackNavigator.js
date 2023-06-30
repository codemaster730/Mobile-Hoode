import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';


import LoginScreen from './screens/LoginScreen'
import PostServices from './screens/postServices';
import SetLocation from './screens/setLocation';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Post Services"
					component={PostServices}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Set Location"
					component={SetLocation}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
    </NavigationContainer>
  )
}
