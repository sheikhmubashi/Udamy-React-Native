import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquireScreen = () => {
    return <View>
        <ColorCounter color='red'/>
        <ColorCounter color='green'/>
        <ColorCounter color='blue'/>

    </View>

}

const styles = StyleSheet.create({});

export default SquireScreen;