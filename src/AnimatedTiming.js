import React, {useEffect, useRef} from 'react';
import {Animated, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';

const AnimatedTiming = () => {
    const translation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(translation, {
            toValue: 155,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
                <Animated.View
                    style={[styles.boxOrange, {
                        transform: [{ translateX: translation }],
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

export default AnimatedTiming;
