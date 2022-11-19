import * as React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import checkRoute from '../data/checkRoute';

// Main Button that switches to analysis
export default function AnalButton({ startPoint, endPoint, placeholder, navigation }) {
    const [problemMsg, setProblemMsg] = React.useState('');

    // If the input is correct, switch to analysis screen, otherwise show problem
    function pressButton() {
        const problem = checkRoute(startPoint,endPoint,placeholder)
        if (problem === ''){
            setProblemMsg('')
            const start = startPoint['startPoint']
            const end = endPoint['endPoint']
            const title = 'U6 starting ' + start.substring(0,11);
            navigation.navigate('Route Analysis', { name: title, start: start, end: end});
        } else {
            setProblemMsg(problem);
        }
    }

    return (
        <View style={styles.analView}>
            <Text style={styles.problemMsg}>
                {problemMsg}
            </Text>
            <Pressable
                style={[styles.analButton,
                { // Color of button depends on whether the input is correct
                    backgroundColor: checkRoute(
                        startPoint = { startPoint },
                        endPoint = { endPoint },
                        placeholder = { placeholder }
                    ) === '' ? '#4A639E' : '#ccc'
                }]}
                onPress={() =>
                    pressButton()
                }>
                <Text style={styles.buttonText}>
                    Analyze route!
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    analView: {
        alignItems: 'center',
    },
    problemMsg: {
        padding: 8,
        fontSize: 16,
        color: '#F00',
        textAlign: 'center',
    },
    analButton: {
        alignItems: 'center',
        width:180,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});