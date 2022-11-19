import { StyleSheet, SafeAreaView, View } from 'react-native';

import ReliabilityCheck from './reliabilitycheck';

// Will later show the connection analysis of a route
export default function AnalysisScreen({ navigation, route }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ReliabilityCheck/>
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
});