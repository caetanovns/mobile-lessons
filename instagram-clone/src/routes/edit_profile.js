import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import ProfileDrawer from './profile_drawer'
import Edit from '../pages/profile/edit';

const Stack = createStackNavigator();

export default function EditProfile() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileDrawer"
          component={ProfileDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Edit" 
          component={Edit}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
}

