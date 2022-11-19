import React, {useState} from 'react';
 
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
 
// Choose from dropdown, or request location from device
// Based on city's Open Data program
import LocationPicker from './components/locationPicker';
 
const App = () => {
  const initTextfield = 'Choose station or pick current location'
  const [startPoint, setStartPoint] = useState(initTextfield);
  const [endPoint, setEndPoint] = useState(initTextfield);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Starting point:
        </Text>
        <LocationPicker state={startPoint} setState={setStartPoint}/>
        <Text style={styles.titleText}>
          Destination:
        </Text>
        <LocationPicker state={endPoint} setState={setEndPoint}/>
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
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
});