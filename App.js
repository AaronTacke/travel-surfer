import * as React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/homeScreen';

import AnalysisScreen from './components/analScreen';

const Stack = createNativeStackNavigator();
 
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    <Stack.Screen name="Route Analysis" component={AnalysisScreen}
    options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;
