import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Auth from './src/pages/auth';
import Feed from './src/pages/feed';
import Login from './src/pages/login';
import HomeScreenRouters from './src/routes/home_screen_routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" barStyle={'dark-content'} backgroundColor={'white'} />
      {/* <Login/> */}
      {/*<Auth />*/}
      {/* <Feed/> */}
      <HomeScreenRouters/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
