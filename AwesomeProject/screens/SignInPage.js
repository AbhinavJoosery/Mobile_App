import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {signInAction} from '../redux/signup';
import Colours from '../Colours';

function SignInPage({navigation}) {
  const emailList = useSelector(state => state.register.email);
  const passwordList = useSelector(state => state.register.password);

  const dispatch = useDispatch(); //   dispatch is used to call action from reducer

  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  const passwordInputHandler = inputText => {
    setPassword(inputText);
  };

  function signInHandler() {
    const userIndex = emailList.indexOf(getEmail);
    if (userIndex >= 0 && passwordList[userIndex] == getPassword) {
      dispatch(signInAction(userIndex));

      navigation.navigate('Homepage');
    } else {
      Alert.alert('Log IN ERROR', 'Incorrect email or password', [
        {text: 'OK', onPress: () => console.log('')},
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Welcome To Lorem Ipsum</Text>

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
        <Button title="Sign In" onPress={signInHandler} color={Colours.pink} />
      </View>

      <View style={styles.btnContainer}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Sign Up')}
          color={Colours.purpleSecondary}
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

  appTitle: {
    color: Colours.white,
    fontSize: 25,
    marginBottom: 50,
  },

  textInputContainer: {
    width: '80%',
    marginBottom: 40,
  },

  textInput: {
    borderColor: Colours.grey,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    padding: 20,
    color: Colours.darkBlue,
    backgroundColor: Colours.grey,
  },

  btnContainer: {
    width: '80%',
    marginBottom: 40,
  },
});

export default SignInPage;
