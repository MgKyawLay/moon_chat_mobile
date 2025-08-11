import { StatusBar, StyleSheet } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
