import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {useState, useEffect} from 'react';
import SignInPage from './screens/SignInPage';
import SignUpPage from './screens/SignUpPage';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();
export default function App() {
  const [getStatus, setStatus] = useState(0);

  const MS = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      AsyncStorage.getItem('IS_LOGGED_IN', (err, result) => {
        setStatus(Number(result));
      });
    }, MS);
    return () => clearInterval(interval); // the unmount function, clear interval to prevent memory leaks.
  }, []);

  return (
    <Provider store={store}>
      {getStatus ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Homepage">
            <Stack.Screen name="Homepage" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Sign In">
            <Stack.Screen name="Sign In" component={SignInPage} />
            <Stack.Screen name="Sign Up" component={SignUpPage} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  );
}
