import React from 'react';
import { View, Text, TextInput , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './SplashScreen';
import Register from './Screen/Auth/Register';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const Auth = ({navigation}) =>{
//   return(
//     <Stack.Navigator initialRouteName="login">
//       <Stack.Screen
//         name = "login"
//         component = {Login}
//         options = {{headerShown : false}}
//       />

//       <Stack.Screen
//         name = "register"
//         component = {Register}
//         options={{
//           headerShown:false,
//           headerTitle: "",
//           headerLeft: () =>(
//             <MaterialIcons onPress={() => navigation.navigate('login')} name="arrow-back-ios" size={25} style={{paddingLeft : 12}} />
//           )
//         }}
//       />
//     </Stack.Navigator>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="register" component={Register} options={{headerShown: false}} />
          {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
          <Stack.Screen name="ScreenConnected" component={ScreenConnected} options={{headerShown: false}} /> */}
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
