import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import Feed from '../pages/feed/'
import StorieContainer from '../pages/feed/components/storie_container';

const Stack = createStackNavigator();

export default function StorieContainers() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="StorieContainer" 
          component={StorieContainer}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
}

