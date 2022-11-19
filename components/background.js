import { ImageBackground, Dimensions, StyleSheet } from 'react-native';

const background = require('../assets/background2.png');
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

// Shows random facts (mockup using images)
export default function Background({ children }) {
    return (
        <ImageBackground source={background} style={styles.background} resizeMode="stretch">
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});