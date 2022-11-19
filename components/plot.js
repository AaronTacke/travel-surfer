import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


const plots = [require('../assets/minplot.png'),require('../assets/sizeplot.png')];
const axs = [require('../assets/minax.png'),require('../assets/sizeax.png')];

export default function Diagram( {button} ) {
    const [axImage, setAxImage] = React.useState(axs[0])
    const [plotImage, setPlotImage] = React.useState(plots[0])

    if(button === 'Usage' && axImage != axs[0]){
        setAxImage(axs[0])
        setPlotImage(plots[0])
    }else if(button !== 'Usage' && axImage != axs[1]){
        setAxImage(axs[1])
        setPlotImage(plots[1])
    }

    const Mask = () => {
        return <View style={styles.mask} />;
    };

    const translateXmin = -880;
    const translateXmax = -53;
    const translateX = useSharedValue(translateXmax);
    const translateScrolling = useSharedValue(0);

    const onDrag = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value;
        },
        onActive: (event, context) => {
            if (event.translationX + context.translateX > translateXmax) {
                translateX.value = translateXmax;
            } else if (event.translationX + context.translateX < translateXmin) {
                translateX.value = translateXmin;
            } else {
                translateX.value = event.translationX + context.translateX;
            }
            translateScrolling.value = 10*(-translateX.value+translateXmax);
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

    const scrollStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateX: withTiming(translateScrolling.value, {
                duration: 750,
              }),
            },
          ],
        };
      });

    const scrollimg = require('../assets/scroll.png');
    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedImage = Animated.createAnimatedComponent(Image);

    return (
        <View style={styles.diag}>
                <AnimatedImage style={[scrollStyle, styles.scroll]} source={scrollimg} />
            <Image style={styles.axImage} source={axImage} />
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
                        <Image source={plotImage} style={styles.plotImage} />
                    </AnimatedView>
                </PanGestureHandler>
            </MaskedView>
        </View>
    );
}

const styles = StyleSheet.create({
    maskedView: {
        marginLeft: -30,
        marginTop: -90,
        flex: 1,
        flexDirection: 'row',
        height: '100%',
    },
    scroll: {
        position: 'absolute',
        top: 60,
        right: 30,
        height: 100,
        width: 100,
    },
    mask: {
        width: '120%',
        height: 600,
        backgroundColor: "red",
    },
    diag: {
        marginBottom: -155,
        height: 600,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    axImage: {
        marginLeft: -20,
        zIndex: 1,
        marginTop: -90,
        height: 600,
    },
    plotAnimView: {
        height: 600,
    },
    plotImage: {
        height: 600,
    },
});

