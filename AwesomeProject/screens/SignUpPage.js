import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {signUpAction} from '../redux/signup';
import {useState} from 'react';

function SignUpPage({navigation}) {
  const dispatch = useDispatch(); //   dispatch is used to call action from reducer

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
    dispatch(
      signUpAction([
        getFirstName,
        getLastName,
        getUserName,
        getEmail,
        getPassword,
      ]),
    );
    navigation.navigate('Sign In');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Create your Lorem Ipsum Account</Text>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChangeText={firstNameInputHandler}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            onChangeText={lastNameInputHandler}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={userNameInputHandler}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            textContentType="emailAddress"
            onChangeText={emailInputHandler}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={passwordInputHandler}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button title="Sign Up" onPress={signUpHandler} color="#9932CC" />
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
    backgroundColor: '#311b6b',
  },

  pageTitle: {
    color: 'white',
    fontSize: 25,
    marginBottom: 50,
    textAlign: 'center',
  },

  textInputContainer: {
    width: '80%',
    marginBottom: 20,
  },

  textInput: {
    borderColor: '#e4d0ff',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    padding: 20,
    color: '#120438',
    backgroundColor: '#e4d0ff',
  },

  btnContainer: {
    width: '80%',
    marginBottom: 70,
  },
});

export default SignUpPage;
