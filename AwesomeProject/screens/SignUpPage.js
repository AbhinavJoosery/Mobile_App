import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

function SignUpPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Create Your Lorem Ipsum Account</Text>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="First Name" />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="Last Name" />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="Username" />
        </View>

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
            title="Sign Up"
            // onPress={() => }
            color="#9932CC"
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
