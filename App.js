import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConnexionScreen from "./Screens/ConnexionScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import SignupScreen from "./Screens/SignupScreen";

const Stack = createStackNavigator()
export default function App() {

  return (

      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown:false,}} initialRouteName={'Login'}
        >
            <Stack.Screen name={'Login'} component={ConnexionScreen}/>
            <Stack.Screen name={'Signup'} component={SignupScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
