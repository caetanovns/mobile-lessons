import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Contact from './src/pages/contact';
import Router from './src/routes/router';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
}
