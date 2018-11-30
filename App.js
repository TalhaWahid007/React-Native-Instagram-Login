/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground style={ styles.imgBackground }
                 resizeMode='cover' 
                 source={require('./img/bg-img.png')}>
      <View style={styles.container}>
      <Image source ={require('./img/insta-logo.png')} style={styles.logo}/>
        <TextInput style={styles.txtname} placeholder ="UserName" placeholderTextColor='rgba(225,225,225,0.7)'/>
        <TextInput style={styles.txtpass} placeholder ="Password" placeholderTextColor='rgba(225,225,225,0.7)'/>
  

        <TouchableOpacity style={styles.buttonContainer} 
            onPress={ () => alert('User Logged In') }>
             <Text  style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.txtforget}>Forget your login details? Get help in signing in</Text>
        <Text style={styles.txtOr}>OR</Text>
        <Image source = {require('./img/fbicon.png')} style={styles.fbicon}/> 
        <Text style={styles.txtfb} >Log in with Facebook</Text>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
  logo:{
    width: 260,
    height: 90,
    top: -70,
  },
  txtname:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    padding: 10,
    color: '#fff',
    height:40,
    width:330,
    marginTop: -50,
  },
  txtpass:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    padding: 10,
    color: '#fff',
    height:40,
    width:330,
    marginTop: 15,
  },
  buttonContainer:{
    height: 40,
    padding: 10,
    color: '#fff',
    height:40,
    width:330,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(225,225,225,0.2)',

  },
  buttonText:{
    color: 'rgba(225,225,225,0.6)',
    textAlign: 'center',
    fontWeight: '700',
  },
  fbicon:{
    width:30,
    height:30,
    marginTop:10,
    right: 70,
    borderRadius:4
  },
  txtforget:{
    color:'white',
    marginTop:10,
    fontWeight: 'bold',
  },
  txtOr:{
    marginTop:10,
    fontWeight:'bold',
    color:'rgba(225,225,225,0.7)',
  },
  txtfb:{
    color:'white',
    fontWeight:'bold',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginTop: -27,
    right: 115,
  }

});
