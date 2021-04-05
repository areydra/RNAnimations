import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'light-content'} backgroundColor={'white'}/>
    <Text style={styles.textTitleTypes}>Animation Types</Text>
    <Text style={styles.textAnimation}>Animated timing</Text>
    <Text style={styles.textAnimation}>Animated spring</Text>
    <Text style={styles.textTitleComposition}>Animation Composition</Text>
    <Text style={styles.textAnimation}>Animated sequence</Text>
    <Text style={styles.textAnimation}>Animated parallel</Text>
    <Text style={styles.textAnimation}>Animated stagger</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  textTitleTypes: {
    fontSize: 24,
    textAlign: 'center',
  },
  textTitleComposition: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 48,
  },
  textAnimation: {
    fontSize: 18,
    marginTop: 14,
  },
});

export default App;
