import { StatusBar, SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" barStyle={'dark-content'} backgroundColor={'white'} />
      <Text>Inicie o teste!</Text>
    </SafeAreaView>
  );
}
