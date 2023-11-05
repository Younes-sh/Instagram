import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator'
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <StatusBar /> */}
    </NavigationContainer>
  );
}

