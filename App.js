import React, {useState} from 'react';
 
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Background from './components/background';
import Header from './components/header';
 
// Choose from dropdown, or request location from device
// Based on city's Open Data program
import LocationPicker from './components/locationPicker';

// Puts Random facts on the screen for a more enjoyable experience
import RandomFact from './components/randomfact';
 
const App = () => {
  const initTextfield = 'Choose station or pick current location'
  const [startPoint, setStartPoint] = useState(initTextfield);
  const [endPoint, setEndPoint] = useState(initTextfield);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Background>
        <Header />
        <Text style={styles.headlineText}>
          Starting point:
        </Text>
        <LocationPicker state={startPoint} placeholder={initTextfield} setState={setStartPoint}/>
        <Text style={styles.headlineText}>
          Destination:
        </Text>
        <LocationPicker state={endPoint} placeholder={initTextfield} setState={setEndPoint}/>
        <RandomFact />
        </Background>
      </View>
    </SafeAreaView>
  );
};
 
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  headlineText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
});