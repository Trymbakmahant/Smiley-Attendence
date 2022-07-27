import * as React from 'react';
import { Image, Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../navigator/authpro';
import DropDown from './DropDown';

let shift =[{
    id:1, name:'09:00AM - 12:00PM'
},
{
    id:2, name: '12:00PM - 03:00PM'
},
{
    id:3, name: '03:00PM - 06:00PM'
}]

function Home({navigation}, props){
    const {logout} = React.useContext(AuthContext);
    const[selectedItem, setSelectedItem] = React.useState(null);

    const onSelect = (item) => {
        setSelectedItem(item);
    }
    
    return (
        <SafeAreaView style={styles.homeScreen}>
            <View style={styles.profilesec}>
                <Image style={styles.profile} source={require('../img/person.png')}></Image>
                <Text style={styles.name}>John Doe</Text>
            </View>
            <View style={styles.detailsSec}>
                <Text style={styles.detail}>SHIFT</Text>
                <DropDown value={selectedItem} data={shift} onSelect={onSelect}/>
                <Text style={styles.detail}>DATE</Text>
                <TextInput style={styles.input} placeholder="SELECT THE DATE"></TextInput>
            </View>
            <View style={styles.buttonSec}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>OUT</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.leaveBtn} onPress={() => navigation.navigate('Holiday')}>
                <Text style={styles.leaveTxt}>REQUEST LEAVE</Text>
            </TouchableOpacity>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navMenu}>
                    <Text><Icon name="user" size={25} color="#0AA1DD" /></Text>
                    <Text style={styles.navItem}>PROFILE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home} >
                    <Text><Icon name="home" size={30} color="#fff" /></Text>
                    <Text style={styles.homeTxt}>HOME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navMenu}>
                    <Text><Icon name="arrow-right" size={25} color="#0AA1DD" /></Text>
                    <Text style={styles.navItem} onPress={() => logout()}>LOG-OUT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeScreen:{
        width:"100%",
        height:"100%",
        backgroundColor:'#fff'
    },
    profilesec:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        top:55
    },
    profile:{
        height:150,
        width:150,
        borderRadius:100
    },
    name:{
        fontSize:35,
        fontWeight:'500',
        marginTop:15
    },
    detailsSec:{
        top:105,
        left:40,
    },
    detail:{
        fontSize:25,
        color:"#0AA1DD",
        marginBottom:8
    },
    input:{
        backgroundColor:"#fff",
        width:"80%",
        borderRadius:20,
        height:65,
        padding:15,
        elevation:8,
        shadowColor:"#747474",
        marginBottom:55
    },
    buttonSec:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:"20%", 
        marginTop:125
    },
    button:{
        backgroundColor:"#0AA1DD",
        paddingHorizontal:25,
        paddingVertical:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        elevation:8,
        shadowColor:"#0AA1DD"
    },
    btnText:{
        color:"#fff",
        fontSize:25,
        fontWeight:"500"
    },
    leaveBtn:{
        backgroundColor:"#fff",
        marginTop:45,
        paddingHorizontal:35,
        paddingVertical:15,
        borderRadius:20,
        alignSelf:'center',
        elevation:8,
        shadowColor:"#747474"
    },
    leaveTxt:{
        fontSize:25,
        fontWeight:"600",
        color:"#0AA1DD"
    },
    navBar:{
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:25,
        marginHorizontal:35,
        marginTop:85,
        height:85,
        borderRadius:25,
        elevation:8,
        shadowColor:"#747474"
    },
    navMenu:{
        alignItems:'center'
    },
    navItem:{
        fontSize:15,
        color:"#0AA1DD"
    },
    home:{
        backgroundColor:"#0AA1DD",
        alignItems:'center',
        justifyContent:'center',
        height:100,
        width:100,
        borderRadius:105,
        top:"-10%",
        elevation:8,
        shadowColor:"#0AA1DD"
    },
    homeTxt:{
        fontSize:20,
        color:"#fff",
        fontWeight:"550"
    }
})

export default Home;