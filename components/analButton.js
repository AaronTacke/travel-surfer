import * as React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import checkRoute from '../data/checkRoute';

export default function AnalButton({ startPoint, endPoint, placeholder, navigation }) {
    const [problemMsg, setProblemMsg] = React.useState('This is a problem');

    function pressButton() {
        const problem = checkRoute(startPoint,endPoint,placeholder)
        if (problem === ''){
            setProblemMsg('')
            navigation.navigate('Route Analysis', { name: 'Route Analysis' });
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
                {
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