import * as React from 'react';

import { SafeAreaView, StyleSheet, Button, Text, View, StatusBar, StatusBarBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Background from './background';
import Header from './header';

// Choose from dropdown, or request location from device
// Based on city's Open Data program
import LocationPicker from './locationPicker';

// Used to switch to analysis screen
import AnalButton from './analButton';

// Puts Random facts on the screen for a more enjoyable experience
import RandomFact from './randomfact';

export default function HomeScreen({navigation}) {
    const initTextfield = 'Choose a station...'
    const [startPoint, setStartPoint] = React.useState(initTextfield);
    const [endPoint, setEndPoint] = React.useState(initTextfield);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Background>
                    <Header />
                    <Text style={styles.headlineText}>
                        Starting point
                    </Text>
                    <LocationPicker state={startPoint} placeholder={initTextfield} setState={setStartPoint} />
                    <Text style={styles.headlineText}>
                        Destination
                    </Text>
                    <LocationPicker state={endPoint} placeholder={initTextfield} setState={setEndPoint} />
                    <AnalButton navigation={navigation}
                        startPoint={startPoint} endPoint={endPoint}
                        placeholder={initTextfield}/>
                    <RandomFact />
                </Background>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    headlineText: {
        width: '86%',
        padding: 8,
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
});