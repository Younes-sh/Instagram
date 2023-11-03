import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Navigation from './Navigation/TabNavigation';
import Login from './Screens/Login';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <Login /> */}
      <StatusBar />
    </NavigationContainer>
  );
}

