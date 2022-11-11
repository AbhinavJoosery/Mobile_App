import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Button,
} from 'react-native';

function SignInPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Welcome To Lorem Ipsum</Text>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          textContentType="emailAddress"
        />
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          title="Sign In"
          // onPress={() => }
          color="#ec0f80"
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Sign Up')}
          color="#9932CC"
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
    backgroundColor: '#311b6b',
  },

  appTitle: {
    color: 'white',
    fontSize: 25,
    marginBottom: 50,
  },

  textInputContainer: {
    width: '80%',
    marginBottom: 40,
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
    marginBottom: 40,
  },
});

export default SignInPage;
