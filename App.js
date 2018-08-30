/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,  Image } from 'react-native';
import Judul from './Components/Judul';

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
      <View style={styles.container}>
        <Judul/>
         <Text style={styles.welcome}>Hello lol :D </Text>
        <Text style={styles.welcome}>Nama   : Symisius Lintang Ranataru </Text>
        <Text style={styles.blue}>Kelas     : XI RPL 3 </Text>
        <Text style={styles.red}>No Absen   :37 </Text>
          <Image 
        style={{width: 400, height: 400}}
        resizeMode="contain"
        source={{ uri: 'https://scontent.fsub2-2.fna.fbcdn.net/v/t1.0-9/40044386_246628869225574_7152952574730043392_o.jpg?_nc_cat=0&_nc_eui2=AeGFclgg_dOhkgTPGZQqXrcOEuQ5Nbm3_7UISe5F9y_XvCbik9yRRxBq-jnDVHgW8rlqSZChtOXWSlfBwOGqpcPFQouuQ93_b0cixzL_YBtDtfsaZSgquVb3_ErbW9-6odQ&oh=493d97e6a2d4fe7691059f4f4f72da46&oe=5C33F74A' }}
    />
          

        <Text style={styles.welcome} numberOfLines={1} onLongPress={() => alert('longPress')}>
           Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
     </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
