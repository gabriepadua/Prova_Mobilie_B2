import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Appearance, SafeAreaView, ScrollView } from 'react-native-web';
import DashBoard from './src/pages/DashBoard';
import ForgotPassword from './src/pages/ForgotPassword'
import LoginPage from './src/pages/LoginPage'
import RegisterPage from './src/pages/RegisterPage';
import App from './src/pages/DashBoard';


const Stack = createNativeStackNavigator();

const Card = ({ item }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name = 'DashBoard' component={DashBoard} options={{headerShown: false}} />
        <Stack.Screen name = 'RegisterPage' component={RegisterPage} />
        <Stack.Screen name = 'LoginPage' component={LoginPage} />
        <Stack.Screen name = 'ForgotPassword' component={ForgotPassword} />


      </Stack.Navigator>
      
      </NavigationContainer>
  );
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FB6D41',
    padding: 10,
    width: '80%'
  },
  cardContainer: {
    backgroundColor: '#C93BE3',
    borderRadius: 15,
    padding: 30,
  },
  cardImage: {
    width: '100%',
    height: 250,
    borderRadius: 30,
  },
  cardTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardDescription: {
    marginTop: 10,
  },
  cardButton: {
    backgroundColor: '#3BE39E',
    borderRadius: 15,
    padding: 20,
    marginTop: 8,
  },
  cardButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});



