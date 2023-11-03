import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import AddPost from '../Screens/AddPost';
import Direct from '../Screens/Direct';
import Explore from '../Screens/Explore';

// Icons EXPO
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';


export default function Navigation() {
    const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor:'#105955',
        tabBarActiveTintColor:'#fff',
        tabBarIconStyle:'#ccc',
        headerShown:false
      }}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon:(color) => <Ionicons name="md-home" size={24} color='black'  /> }} />
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:() => <MaterialCommunityIcons name="face-man" size={24} color="black" />}} />
        <Tab.Screen name="AddPost" component={AddPost} options={{ tabBarIcon:() => <Ionicons name="ios-add-circle-sharp" size={24} color="black" />}} />
        <Tab.Screen name="Direct" component={Direct} options={{tabBarIcon:() => <FontAwesome5 name="location-arrow" size={24} color="black" />}} />
        <Tab.Screen name="Explore" component={Explore} options={{tabBarIcon:() => <FontAwesome name="search" size={24} color="black" />}}/>
      </Tab.Navigator>
  );
}