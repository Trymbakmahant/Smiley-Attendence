import * as React from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../navigator/authpro';

function Home({navigation}, props) {
  const {logout} = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.homeScreen}>
      <TouchableOpacity style={styles.logout_sec} onPress={() => logout()}>
        <Icon name="arrow-right" size={25} color="#0AA1DD" />
        <Text style={styles.logout_txt}>LOGOUT</Text>
      </TouchableOpacity>
      <View style={styles.profilesec}>
        <Image style={styles.profile} source={require('../img/person.png')} />
        <View style={styles.emp_det}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.desig}>Employee</Text>
        </View>
      </View>
      <View style={styles.qrContainer}>
        <Image source={require('../img/qr_code.png')} style={styles.qrCode} />
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navMenu}>
          <Text>
            <Icon name="user" size={20} color="#0AA1DD" />
          </Text>
          <Text style={styles.navItem}>PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home}>
          <Text>
            <Icon name="home" size={25} color="#fff" />
          </Text>
          <Text style={styles.homeTxt}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navMenu}>
          <Text>
            <Icon name="file" size={20} color="#0AA1DD" />
          </Text>
          <Text style={styles.navItem}>REPORT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  logout_sec: {
    paddingVertical: '2.5%',
    width: '27%',
    paddingHorizontal: '2.5%',
    backgroundColor: '#f0faff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
    marginLeft: '2.5%',
    marginTop: '2.5%',
  },
  logout_txt: {
    fontSize: 18,
    color: '#0aa1dd',
    fontWeight: '500',
  },
  profilesec: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    backgroundColor: '#f0faff',
    marginHorizontal: '10%',
    paddingVertical: '5%',
    borderRadius: 25,
  },
  profile: {
    height: 120,
    width: 120,
    borderRadius: 25,
  },
  name: {
    fontSize: 35,
    fontWeight: '500',
  },
  emp_det: {
    marginLeft: '5%',
  },
  desig: {
    fontSize: 20,
    fontWeight: '300',
  },
  qrContainer: {
    height: 420,
    width: 420,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 35,
    shadowColor: '#8c8c8c',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '20%',
  },
  qrCode: {
    height: 400,
    width: 400,
    alignSelf: 'center',
  },
  navBar: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginHorizontal: 55,
    height: 85,
    borderRadius: 25,
    elevation: 15,
    shadowColor: '#696969',
  },
  navMenu: {
    alignItems: 'center',
  },
  navItem: {
    fontSize: 15,
    color: '#0AA1DD',
  },
  home: {
    backgroundColor: '#0AA1DD',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 105,
    top: '-10%',
    elevation: 15,
    shadowColor: '#006691',
  },
  homeTxt: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '550',
  },
});

export default Home;
