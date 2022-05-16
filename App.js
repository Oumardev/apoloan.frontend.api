import React from 'react';
import { View, Text, TextInput , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import store from './store'
import { Provider } from 'react-redux';
import SplashScreen from './SplashScreen';
import Register from './Screen/Auth/Register';
import Login from './Screen/Auth/Login'
import Historical from './Screen/Private/Historical'
import Home from './Screen/Private/Home'
import Refund from './Screen/Private/Refund'
import Profile from './Screen/Private/Profile'
import InfoAnnonce  from "./Screen/Private/Info/Home/InfoAnnonce"
import MakeAnnonce from './Screen/Private/Modal/Home/MakeAnnonce';
import EditProfile from './Screen/Private/Modal/Profile/EditProfile';
import EditPassword from './Screen/Private/Modal/Profile/EditPassword';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PrivateScreen = ({navigation}) =>{
    
  return (
    <Tab.Navigator tabBarOptions={{ showLabel : false }} >
       
       <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({focused}) =>{
            return(
            <View style={{alignItems : 'center', justifyContent : 'center'}}>
              <MaterialCommunityIcons name={'calendar-month'} size={25} color={focused ? 'tomato' : 'gray'} />
              <Text style={{color :  focused ? 'tomato' : 'gray', fontSize : 15, fontWeight : '500'}} >Acceuil</Text>
            </View>)
          },
          headerTitle : ()=>(
            <Text style={{color : 'white', fontSize: 20, fontWeight : '500'}}>Acceuil</Text>
          ),
          headerStyle :{
            backgroundColor : 'black',
            height : 86
          }
        }}
      />

      <Tab.Screen name="Historical" component={Historical} 
        options={{
          tabBarIcon: ({focused}) =>{
            return(
            <View style={{alignItems : 'center', justifyContent : 'center'}}>
              <MaterialCommunityIcons name={'history'} size={25} color={focused ? 'tomato' : 'gray'} />
              <Text style={{color :  focused ? 'tomato' : 'gray', fontSize : 15, fontWeight : '500'}} >Historique</Text>
            </View>)
          },
          headerTitle : ()=>(
            <Text style={{color : 'white', fontSize: 20, fontWeight : '500'}}>Historique</Text>
          ),
          headerStyle :{
            backgroundColor : 'rgb(26,53,88)',
            height : 86
          }
        }}
      />

      <Tab.Screen name="Refund" component={Refund} 
        options={{
          tabBarIcon: ({focused}) =>{
            return(
            <View style={{alignItems : 'center', justifyContent : 'center'}}>
              <MaterialCommunityIcons name={'credit-card-refund'} size={25} color={focused ? 'tomato' : 'gray'} />
              <Text style={{color :  focused ? 'tomato' : 'gray', fontSize : 15, fontWeight : '500'}} >Remboursser</Text>
            </View>)
          },
          headerTitle : ()=>(
            <Text style={{color : 'white', fontSize: 20, fontWeight : '500'}}>Rembourssement</Text>
          ),
          headerStyle :{
            backgroundColor : 'rgb(26,53,88)',
            height : 86
          }
        }}
      />

      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({focused}) =>{
            return(
            <View style={{alignItems : 'center', justifyContent : 'center'}}>
              <FontAwesome name={'user'} size={25} color={focused ? 'tomato' : 'gray'} />
              <Text style={{color :  focused ? 'tomato' : 'gray', fontSize : 15, fontWeight : '500'}} >Profile</Text>
            </View>)
          },
          headerTitle : ()=>(
            <Text style={{color : 'black', fontSize: 20, fontWeight : '500'}}>Profile</Text>
          ),
          headerStyle :{
            backgroundColor : 'white',
            height : 86
          }
        }}
      />

    </Tab.Navigator>
  )
}

const Auth = ({navigation}) =>{
  return(
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name = "login"
        component = {Login}
        options = {{headerShown : false}}
      />

      <Stack.Screen
        name = "register"
        component = {Register}
        options={{
          headerShown:false,
          headerTitle: "",
          headerLeft: () =>(
            <MaterialIcons onPress={() => navigation.navigate('login')} name="arrow-back-ios" size={25} style={{paddingLeft : 12}} />
          )
        }}
      />
    </Stack.Navigator>
  )
}

const headerInfoAnnonce = {
  headerShown: true,
  headerTitle: () => <Text style={{fontSize:25, fontWeight:'600', color: 'white'}}>Information</Text>
  ,
  headerLeft: () =>(
    <MaterialIcons name="arrow-back-ios" color={'white'} size={25} style={{paddingLeft : 12}} />
  ),
  headerStyle :{
    backgroundColor : 'black'
  }
}

const headerMakeAnnonce = {
  headerShown: true,
  headerTitle: () => <Text style={{fontSize:25, fontWeight:'600', color: 'white'}}>Faire une annonce</Text>
  ,
  headerLeft: () =>(
    <MaterialIcons name="arrow-back-ios" color={'white'} size={25} style={{paddingLeft : 12}} />
  ),
  headerStyle :{
    backgroundColor : 'black'
  }
}

const headerEditProfile = {
  headerShown: true,
  headerTitle: () => <Text style={{fontSize:25, fontWeight:'600', color: 'black'}}>Modifier profile</Text>
  ,
  headerLeft: () =>(
    <MaterialIcons name="arrow-back-ios" color={'black'} size={25} style={{paddingLeft : 12}} />
  ),
  headerStyle :{
    backgroundColor : 'white'
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
            <Stack.Screen name="PrivateScreen" component={PrivateScreen} options={{headerShown: false}} />

            {/** Info screen : InfoAnnonce */}
            <Stack.Screen name="InfoAnnonce" component={InfoAnnonce} options={headerInfoAnnonce} />
            {/** Info screen : makeAnnonce */}
            <Stack.Screen name="MakeAnnonce" component={MakeAnnonce} options={headerMakeAnnonce} />
            {/** Info screen : EditProfile */}
            <Stack.Screen name="EditProfile" component={EditProfile} options={headerEditProfile} />
            {/** Info screen : EditPassword */}
            <Stack.Screen name="EditPassword" component={EditPassword} options={headerEditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
  </Provider>
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
