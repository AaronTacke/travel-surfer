import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';

// import SearchableDropdown component
import Dropdown from './dropdown';
// import Munich Stations based on OpenData
import { stations } from '../data/locations'
// gets current location of user
import findMe from './geotracker';

export default function LocationPicker({ state, placeholder, setState }) {
    // Shows textfield to search for a station and a button
    // to find the current position of the mobile device
    return (
        <View style={styles.locationContainer}>
            <Dropdown items={stations} state={state} placeholder={placeholder} setState={setState} />
            <TouchableHighlight style={styles.locationButton} onPress={() => findMe(setState)}>
            <Image style={styles.locationButtonIcon} source={require('../assets/location.png')} />
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    locationContainer: {
        paddingRight: 17,
        width: '90%',
        flexDirection: 'row',
    },
    locationButton: {
        marginTop: 3,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    locationButtonIcon: {
        width: 30,
        height: 30,
    },
});
