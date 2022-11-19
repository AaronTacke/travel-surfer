import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const img_sources = [require('../assets/selected.png'), require('../assets/unselected.png')];

export default function StatefulButton({ label, state, setState }) {
    const selected_img = img_sources[1];
    const selected_col = '#4A639E';
    if(state == label){
        selected_img = img_sources[0]
        selected_col = '#FFF';
    }
    return (
        <View style={styles.buttonView}>
            <ImageBackground source={selected_img} style={styles.buttonImg}/>
            <Text style={[styles.buttonText, {color:selected_col}]}>
                {label}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttenView: {
        alignItems: 'center',
    },
    buttonImg: {
        width: 130,
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    buttonText: {
        paddingTop: 7,
        fontSize: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        position: 'absolute',
    }
});

