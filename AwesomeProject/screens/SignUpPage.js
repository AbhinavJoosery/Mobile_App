import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
  ScrollView,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Colours from '../Colours';
import TxtInput from '../components/TxtInput';
import {useState} from 'react';

function SignUpPage({navigation}) {
  const [getFirstName, setFirstName] = useState('');
  const [getLastName, setLastName] = useState('');
  const [getUserName, setUserName] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  const firstNameInputHandler = inputText => {
    setFirstName(inputText);
  };

  const lastNameInputHandler = inputText => {
    setLastName(inputText);
  };

  const userNameInputHandler = inputText => {
    setUserName(inputText);
  };

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  const passwordInputHandler = inputText => {
    setPassword(inputText);
  };

  const signUpHandler = () => {
    if (
      getFirstName.length > 0 &&
      getLastName.length > 0 &&
      getUserName.length > 0 &&
      getEmail.length > 0 &&
      getPassword.length > 0
    ) {
      AsyncStorage.setItem(
        getEmail,
        JSON.stringify([
          getFirstName,
          getLastName,
          getUserName,
          getEmail,
          getPassword,
        ]),
      );

      navigation.navigate('Sign In');
    } else {
      Alert.alert('Sign up ERROR', 'Please fill out all fields', [
        {text: 'OK', onPress: () => console.log('')},
      ]);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Create your Lorem Ipsum Account</Text>

        <TxtInput
          placeholderLabel={'First Name'}
          inputHandler={firstNameInputHandler}
          contentType={'givenName'}
        />

        <TxtInput
          placeholderLabel={'Last Name'}
          inputHandler={lastNameInputHandler}
          contentType={'familyName'}
        />

        <TxtInput
          placeholderLabel={'User Name'}
          inputHandler={userNameInputHandler}
          contentType={'username'}
        />

        <TxtInput
          placeholderLabel={'Email'}
          inputHandler={emailInputHandler}
          contentType={'emailAddress'}
        />

        <TxtInput
          placeholderLabel={'password'}
          inputHandler={passwordInputHandler}
          contentType={'password'}
          secureEntry={true}
        />

        <View style={styles.btnContainer}>
          <Button
            title="Sign Up"
            onPress={signUpHandler}
            color={Colours.purpleSecondary}
          />
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 50,
    textAlign: 'center',
  },

  btnContainer: {
    width: '80%',
    marginBottom: 70,
  },
});

export default SignUpPage;
