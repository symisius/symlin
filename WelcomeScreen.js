import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';

 class Login extends Component{

    render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.title}>biodata</Text>


                <Image
                    style={{width: 120, height: 120,marginLeft:110,marginTop:30}}
                    source={{ uri: 'https://scontent.fsub2-2.fna.fbcdn.net/v/t1.0-9/40044386_246628869225574_7152952574730043392_o.jpg?_nc_cat=0&_nc_eui2=AeGFclgg_dOhkgTPGZQqXrcOEuQ5Nbm3_7UISe5F9y_XvCbik9yRRxBq-jnDVHgW8rlqSZChtOXWSlfBwOGqpcPFQouuQ93_b0cixzL_YBtDtfsaZSgquVb3_ErbW9-6odQ&oh=493d97e6a2d4fe7691059f4f4f72da46&oe=5C33F74A' }}
                     /> 
                
                  <Text style={styles.welcome}>Nama   : Symisius Lintang Ranataru </Text>
                  <Text style={styles.blue}>Kelas     : XI RPL 3 </Text>
                  <Text style={styles.red}>No Absen   :37 </Text>
            </View>

        )
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex:3,
    },

    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
 



})