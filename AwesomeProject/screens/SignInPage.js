import {StyleSheet, View, StatusBar, Text, Button, Alert} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {signInAction} from '../redux/signup';
import Colours from '../Colours';
import TxtInput from '../components/TxtInput';

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

      <TxtInput
        placeholderLabel={'Email'}
        contentType={'emailAddress'}
        inputHandler={emailInputHandler}
      />

      <TxtInput
        placeholderLabel={'password'}
        contentType={'password'}
        secureEntry={true}
        inputHandler={passwordInputHandler}
      />

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

  btnContainer: {
    width: '80%',
    marginBottom: 40,
  },
});

export default SignInPage;
