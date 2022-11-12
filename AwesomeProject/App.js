import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import {store} from './redux/store';

import SignInPage from './screens/SignInPage';
import SignUpPage from './screens/SignUpPage';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sign In">
          <Stack.Screen name="Sign In" component={SignInPage} />
          <Stack.Screen name="Sign Up" component={SignUpPage} />
          <Stack.Screen name="Homepage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight + 50,
//     paddingHorizontal: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#311b6b',
//   },

//   AppTitle: {
//     color: 'white',
//     fontSize: 25,
//     marginBottom: 50,
//   },

//   textInputContainer: {
//     width: '80%',
//     marginBottom: 40,
//   },

//   textInput: {
//     borderColor: '#e4d0ff',
//     borderWidth: 1,
//     borderRadius: 10,
//     width: '100%',
//     padding: 20,
//     color: '#120438',
//     backgroundColor: '#e4d0ff',
//   },

//   btnContainer: {
//     width: '80%',
//     marginBottom: 40,
//   },
// });