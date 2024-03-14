import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SubredditList from './src/components/SubredditList';
import Navbar from './src/components/Navbar';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import WebView from 'react-native-webview';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { clientId, clientSecret, redirectUri, authorizationUrl } from './config';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const authorizationUrl = process.env.AUTHORIZATION_URL;
const uri = process.env.URI;


export const getAccessToken = async () => {
  try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log('AccessToken dans get:', accessToken);
      return accessToken;
  } catch (error) {
      console.log(error);
      return null;        
  }
};

export const fetchUserInfo = async () => {
  try {
    const accessToken = await getAccessToken();
    console.log('AccessToken in fetchUserInfo:', accessToken);
    if (accessToken) {
      const response = await fetch('https://oauth.reddit.com/api/v1/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('User status:', response.status);
        throw new Error ('Echec recuperation info user');
      }

      const userData = await response.json();
      console.log('UserData:', userData);
      return userData;
    }
  } catch (error) {
    console.error('Echec recuperation info user', error);
    throw error;
  }
};

const codeFromUrl = (url) => {
  const urlHash = url.split('#')[0];
  const codeUrl = urlHash.lastIndexOf('code=');
  if (codeUrl !== -1){
    const codeStart = codeUrl + 'code='.length;
    const code = urlHash.substring(codeStart);
    return code;
  }
    return null;
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const handleLogin = (code) => {
    console.log(code);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Basic ${clientId}:${clientSecret}`);

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("code", code);
    urlencoded.append("redirect_uri", "http://localhost:3000/callback");

    var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${clientId}:${clientSecret}`,
      },
      body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/callback`,
      redirect: 'follow'
    };
    
   
    fetch("https://www.reddit.com/api/v1/access_token", requestOptions)
    .then(response => response.json())
    .then(result => {
      getAccessToken(result.access_token)
      console.log("le console log de result :", result);
      setLoggedIn(true);
      AsyncStorage.setItem('accessToken', result.access_token);
    })
    .catch(error => console.log('error', error));
  }
  
  
  if (loggedIn == undefined){
  return (
  <WebView
  onNavigationStateChange={(e) => {
    const extractedCode= codeFromUrl(e.url);
    if (extractedCode){
      handleLogin(extractedCode)
    }
    }}
    source={{
      uri: `https://www.reddit.com/api/v1/authorize?client_id=uZn6VSguEYlIotyFcB3VEQ&response_type=code&state=cocomelon&redirect_uri=http://localhost:3000/callback&duration=temporary&scope=subscribe,identity,read,vote,mysubreddits`
    }}/>)
  } else {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Navbar />
      <BottomTabNavigator />
    </View>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202225',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
