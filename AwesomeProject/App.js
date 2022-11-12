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
