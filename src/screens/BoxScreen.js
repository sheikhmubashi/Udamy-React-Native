import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.parentStyle}>
        <View style={viewOneStyle}></View>
        <View style={viewTwoStyle}></View>
        <View style={viewThreeStyle}></View>
    </View>
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200
    },
    viewOneStyle: {
        height:50,
        width: 50,
    },
    viewTwoStyle: {

    },
    viewThreeStyle: {

    }
})

export default BoxScreen;