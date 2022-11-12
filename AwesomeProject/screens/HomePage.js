import {StyleSheet, View, StatusBar, Text, Button, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import Colours from '../Colours';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

function HomePage({navigation}) {
  const user_id = useSelector(state => state.register.user_login);

  const [getFirstName, setFirstName] = useState('');
  const [getLastName, setLastName] = useState('');
  const [getUserName, setUserName] = useState('');
  const [getEmail, setEmail] = useState('');

  AsyncStorage.getItem(user_id, (err, result) => {
    const userDetails = JSON.parse(result);
    setFirstName(userDetails[0]);
    setLastName(userDetails[1]);
    setUserName(userDetails[2]);
    setEmail(userDetails[3]);
  });

  function signOutHandler() {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {text: 'Sign out', onPress: () => navigation.navigate('Sign In')},
      {text: 'Cancel', onPress: () => console.log('ok')},
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Welcome to Lorem Ipsum {getUserName}</Text>
      <Text style={styles.detailsTitle}>Your details are as follows: </Text>
      <Text style={styles.infoText}>First Name: {getFirstName}</Text>
      <Text style={styles.infoText}>Last Name: {getLastName}</Text>
      <Text style={styles.infoText}>Email Address: {getEmail}</Text>

      <View style={styles.btnContainer}>
        <Button
          title="Sign Out"
          onPress={signOutHandler}
          color={Colours.pink}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colours.purple,
  },

  pageTitle: {
    color: Colours.white,
    fontSize: 25,
    marginBottom: 70,
    textAlign: 'center',
  },

  detailsTitle: {
    color: Colours.white,
    fontSize: 20,
    marginBottom: 55,
  },

  infoText: {
    color: Colours.white,
    fontSize: 15,
    marginBottom: 10,
  },

  btnContainer: {
    width: '80%',
    marginTop: 80,
  },
});

export default HomePage;
