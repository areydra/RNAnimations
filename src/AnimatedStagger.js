import React, {useEffect, useRef} from 'react';
import {Animated, Easing, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';

const AnimatedStagger = () => {
    const translation = useRef(new Animated.Value(0)).current;
    const translationXY = useRef(new Animated.ValueXY(0)).current;

    useEffect(() => {
        transalationValueXY();
    }, []);

    const translationValue = () => {
        let animations = Animated.sequence([
            Animated.timing(translation, {
                toValue: 155,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(translation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]);

        Animated.loop(animations, {
            iterations: -1,
        }).start();
    };

    const transalationValueXY = () => {
        // let animations = Animated.spring([
        //     Animated.timing(translationXY.x, {
        //         toValue: 155,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        //     Animated.timing(translationXY.y, {
        //         toValue: 50,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        //     Animated.timing(translationXY.y, {
        //         toValue: 0,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        //     Animated.timing(translationXY.x, {
        //         toValue: 0,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        // ]);

        let animations = Animated.stagger(1000, [
             Animated.spring(translationXY, {
                toValue: 0,
                useNativeDriver: true
            }),
        ]);

        Animated.loop(animations, {
            iterations: -1,
        }).start()
    }

    const animationsSpring = () => {
        let animations = Animated.sequence([
            Animated.spring(translationXY, {
                toValue: 150,
                useNativeDriver: true
            }),
            Animated.spring(translationXY, {
                toValue: 0,
                useNativeDriver: true
            }),
        ]);

        return animations;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
                <Animated.View
                    style={[styles.boxOrange, {
                        // transform: [{ translateX: translation }],
                        transform: [
                            {translateX: translationXY.x},
                            {translateY: translationXY.y}
                        ],
                    }]}
                />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
});

export default AnimatedStagger;
