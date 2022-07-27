import * as React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigator/authpro";

function Login({navigation}) {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const {login} = React.useContext(AuthContext);
    return(
      <View style={styles.background}>
        <Image source={require('../img/logo.png')} style={styles.logo}></Image>
        <Text style={styles.welcomeTxt}>WELCOME BACK</Text>
        <Text style={styles.headerTxt}>LOGIN TO CONTINUE</Text>
        <View style={styles.detailbox}>
          <Image style={styles.image} source={require('../img/cup.png')}></Image>
          <Text style={styles.login}>LOGIN</Text>
          <View style={styles.loginDetails}>
            <Text style={styles.field}>YOUR EMAIL</Text>
            <TextInput placeholder="ENTER YOUR ADDRESS" style={styles.input} keyboardType="email-address" onChangeText={(userEmail) => setEmail(userEmail)} autoCorrect={false} autoCapitalize="none"></TextInput>
            <Text style={styles.field}>PASSWORD</Text>
            <TextInput placeholder="ENTER YOUR PASSWORD" style={styles.input} onChangeText={(userPassword) => setPassword(userPassword)} autoCorrect={false} autoCapitalize="none"></TextInput>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.acc} onPress={() => navigation.navigate('Register')}>CREATE NEW ACCOUNT</Text>
          <Text style={styles.forPwa}>FORGOT PASSWORD</Text>
        </View>
      </View>
    )
  
  
}

const styles = StyleSheet.create({
  logo:{
    alignSelf:'center',
    height:80,
    width:150,
    marginTop:'5%'
  },

  welcomeTxt:{
    alignSelf:'center',
    marginTop:5,
    fontSize:30,
    fontWeight:'500'
  },

  headerTxt:{
    alignSelf:'center',
    fontSize:15,
    marginTop:8
  },

  background: {
    height:"100%",
    width:"100%",
    backgroundColor:"#DFF6FF"
  },

  detailbox:{
    height:"75%",
    width:"100%",
    position:'absolute',
    bottom:0,
    backgroundColor:"#fff",
    elevation:88,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },

  image:{
    height:250,
    width:190,
    position:'absolute',
    right:25,
    top:-125
  },

  login:{
    alignSelf:'center',
    marginTop:35,
    fontSize:40,
    fontWeight:'bold',
    color:"#7C7C7C"
  },

  field:{
    fontSize:20,
    marginLeft:40,
    color:"#0AA1DD",
    marginBottom:8
  },

  input:{
    backgroundColor:"#fff",
    width:"85%",
    height:65,
    alignSelf:'center',
    borderRadius:20,
    fontSize:15,
    padding:15,
    marginBottom:55,
    elevation:8,
    shadowColor:"#747474"
  },

  loginDetails:{
    marginTop:55
  },

  button:{
    height:75,
    width:"40%",
    alignSelf:'center',
    borderRadius:25,
    backgroundColor:"#0AA1DD",
    elevation:15,
    shadowColor:"#027bab",
    marginTop:55,
    justifyContent:'center',
    alignItems:'center'
  },

  btnText:{
    fontSize:35,
    color:"#fff",
    fontWeight:'500'
  },

  acc:{
    alignSelf:'center',
    fontSize:25,
    marginTop:35,
    fontWeight:"400"
  },

  forPwa:{
    fontSize:20,
    alignSelf:'center',
    marginTop:55,
    color:"#a3a3a3"
  }
})

export default Login;