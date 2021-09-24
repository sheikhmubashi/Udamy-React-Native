import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquireScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREASE = 15;


    return <View>
        <ColorCounter
            onIncrease={() => setRed(red + COLOR_INCREASE)}
            onDecrease={() => setRed(red - COLOR_INCREASE)}
            color='red'
        />
        <ColorCounter
            onIncrease={() => setGreen(green + COLOR_INCREASE)}
            onDecrease={() => setGreen(green - COLOR_INCREASE)}
            color='green'

        />
        <ColorCounter
            onIncrease={() => setBlue(blue + COLOR_INCREASE)}
            onDecrease={() => setBlue(blue - COLOR_INCREASE)}
            color='blue'
        />
        <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>

}

const styles = StyleSheet.create({});

export default SquireScreen;