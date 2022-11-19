import { Text, Image, View, StyleSheet } from 'react-native';

// List of facts
const reliable_icon = require('../assets/reliable.png')

// Shows random facts (mockup using images)
export default function ReliabilityCheck() {
    return (
        <View style={styles.relView}>
            <Text style={styles.text}> The data for this route is </Text>
            <Image style={styles.relLog} source={reliable_icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    relView: {
        marginTop: -15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    relLog: {
        height: 25,
        width: 65,
    },
    text: {
        fontSize: 16,
        textAlign: 'left',
    },
});