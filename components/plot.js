import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { withSafeAreaInsets } from 'react-native-safe-area-context';



export default function Diagram() {
    const Mask = () => {
        return <View style={styles.mask} />;
    };

    const translateXmin = -880;
    const translateXmax = -53;
    const translateX = useSharedValue(translateXmax);

    const onDrag = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value;
        },
        onActive: (event, context) => {
            if(event.translationX + context.translateX > translateXmax){
                translateX.value = translateXmax;
            }else if(event.translationX + context.translateX < translateXmin){
                translateX.value = translateXmin;
            }else{
                translateX.value = event.translationX + context.translateX;
            }
        },
    });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
            ],
        };
    });

    const headerimg = require('../assets/header.png');
    const sizeplot = require('../assets/sizeplot.png');
    const sizeax = require('../assets/sizeax.png');
    const AnimatedView = Animated.createAnimatedComponent(View);

    return (
        <View style={styles.diag}>
            <Image style={styles.axImage} source={sizeax}/>
        <MaskedView
            style={styles.maskedView}
            maskElement={<View style={{
                // Transparent background because mask is based off alpha channel.
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Mask />
            </View>
            }
        >
            <PanGestureHandler onGestureEvent={onDrag}>
                <AnimatedView style={[containerStyle, styles.plotAnimView]}>
                    <Image source={sizeplot} style={styles.plotImage}/>
                </AnimatedView>
            </PanGestureHandler>
        </MaskedView>
        </View>
    );
}

const styles = StyleSheet.create({
    maskedView:{
        marginLeft: -30,
        marginTop: -130,
        flex: 1, 
        flexDirection: 'row', 
        height: '100%',
    },
    mask: {
        width: '120%',
        height: 600,
        backgroundColor: "red",
    },
    diag:{
        height: 600,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    axImage:{
        zIndex:1,
        marginTop:-130,
        height:600,
    },
    plotAnimView:{
        height:600,
    },
    plotImage:{
        height:600,
    },
});

