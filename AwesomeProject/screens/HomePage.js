import {StyleSheet, View, StatusBar, Text, Button, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import Colours from '../Colours';

function HomePage({navigation}) {
  const user_id = useSelector(state => state.counter.user_id);
  const firstname = useSelector(state => state.counter.firstName[user_id]);
  const lastname = useSelector(state => state.counter.lastName[user_id]);
  const username = useSelector(state => state.counter.userName[user_id]);
  const email = useSelector(state => state.counter.email[user_id]);

  function signOutHandler() {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {text: 'Sign out', onPress: () => navigation.navigate('Sign In')},
      {text: 'Cancel', onPress: () => console.log('ok')},
    ]);
  }

  // counter is the name of the reducer in redux/store.js
  // firstname is the property of that reducer found in redux/signup.js
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Welcome back {username}</Text>
      <Text style={styles.detailsTitle}>Your details are as follows: </Text>
      <Text style={styles.infoText}>firstName: {firstname}</Text>
      <Text style={styles.infoText}>lastName: {lastname}</Text>
      <Text style={styles.infoText}>email: {email}</Text>

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
