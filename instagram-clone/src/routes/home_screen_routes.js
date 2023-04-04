import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from "../pages/feed";
import Profile from '../pages/profile';
import Search from '../pages/search';
import Notification from '../pages/notification';
import Media from '../pages/media';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function HomeScreenRouters() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'feed') {
                        return <Ionicons style={styles.icon_size} name={focused == true ? 'home' : 'home-outline'} size={size} color={color} />
                    } else if (route.name === 'search') {
                        return <Ionicons style={styles.icon_size} name={focused == true ? 'search' : 'search-outline'} size={size} color={color} />
                    } else if (route.name === 'media') {
                        return <Ionicons style={styles.icon_size} name={focused == true ? 'add-circle' : 'add-circle-outline'} size={size} color={color} />
                    } else if (route.name === 'notification') {
                        return <Ionicons style={styles.icon_size} name={focused == true ? 'heart' : 'heart-outline'} size={size} color={color} />
                    } else if (route.name === 'profile') {
                        return <Ionicons style={styles.icon_size} name={focused == true ? 'person' : 'person-outline'} size={size} color={color} />
                    }
                },
                tabBarStyle: {
                    height: 75
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'black',
                headerShown: false,
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen name="feed" component={Feed} />
            <Tab.Screen name="search" component={Search} />
            <Tab.Screen name="media" component={Media} />
            <Tab.Screen name="notification" component={Notification} />
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon_size: {
        fontSize: 32
    }
});