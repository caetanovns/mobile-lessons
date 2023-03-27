import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from "../pages/feed";
import Profile from '../pages/profile';
import Search from '../pages/search';
import Notification from '../pages/notification';
import Media from '../pages/media';

const Tab = createBottomTabNavigator();

export default function HomeScreenRouters() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'feed') {
                        return <Ionicons name={focused == true ? 'home' : 'home-outline'} size={size} color={color} />
                    } else if (route.name === 'search') {
                        return <Ionicons name={focused == true ? 'search' : 'search-outline'} size={size} color={color} />
                    } else if (route.name === 'media') {
                        return <Ionicons name={focused == true ? 'add-circle' : 'add-circle-outline'} size={size} color={color} />
                    } else if (route.name === 'notification') {
                        return <Ionicons name={focused == true ? 'heart' : 'heart-outline'} size={size} color={color} />
                    } else if (route.name === 'profile') {
                        return <Ionicons name={focused == true ? 'person' : 'person-outline'} size={size} color={color} />
                    }
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'black',
                headerShown: false,
                tabBarShowLabel: false
            })}>
            <Tab.Screen name="feed" component={Feed} />
            <Tab.Screen name="search" component={Search} />
            <Tab.Screen name="media" component={Media} />
            <Tab.Screen name="notification" component={Notification} />
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
    );
}