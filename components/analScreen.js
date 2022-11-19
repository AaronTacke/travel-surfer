import { StyleSheet, SafeAreaView, View } from 'react-native';
import * as React from 'react';
import { GestureHandlerRootView, State } from "react-native-gesture-handler";

import ReliabilityCheck from './reliabilitycheck';
import StatefulButton from './statefulButton';
import Diagram from './plot';

// Will later show the connection analysis of a route
export default function AnalysisScreen({ navigation, route }) {
    const [buttonState, setButtonState] = React.useState('Usage')
    return (
        <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ReliabilityCheck/>
                <Diagram button={buttonState}/>
                <View style={styles.buttonRow}>
                    <StatefulButton label='Usage' state={buttonState} setState={setButtonState}/>
                    <StatefulButton label='Download' state={buttonState} setState={setButtonState}/>
                </View>
            </View>
        </SafeAreaView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    buttonRow: {
        paddingTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});