import React from 'react';
import { StyleSheet, Text, Pressable, ImageBackground } from 'react-native';

const img_sources = [require('../assets/selected.png'), require('../assets/unselected.png')];

export default function StatefulButton({ label, state, setState }) {
    const [selectedImg, setSelectedImg] = React.useState(img_sources[1]);
    const [selectedCol, setSelectedCol] = React.useState('#4A639E');
    if(state === label && selectedCol != '#FFF'){
        setSelectedImg(img_sources[0]);
        setSelectedCol('#FFF');
    }else if(state !== label && selectedCol == '#FFF'){
        setSelectedImg(img_sources[1]);
        setSelectedCol('#4A639E');
    }
    return (
        <Pressable style={styles.buttonView} onPress={() => setState(label)}>
            <ImageBackground source={selectedImg} style={styles.buttonImg}/>
            <Text style={[styles.buttonText, {color:selectedCol}]}>
                {label}
            </Text>
        </Pressable>
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

