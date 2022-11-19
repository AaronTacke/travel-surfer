import { Image, View, StyleSheet } from 'react-native';

// List of facts
const header_source = require('../assets/header.png')

// Shows random facts (mockup using images)
export default function Header() {
    return (
        <View style={styles.headerView}>
            <Image style={styles.headerLogo} source={header_source} />
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        paddingBottom: 30,
        width: '100%',
        alignItems: 'center',
    },
    headerLogo: {
        height: 80,
        width: 320,
    },
});