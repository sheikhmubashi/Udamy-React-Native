import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquireScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREASE = 15;

    const setColor = (color, change) => {
        if(color === 'red') {
            if(red + change > 255 || red + change < 0) {
                return;
            }else {
                setRed(red + change);
            }
        }
    }

    return <View>
        <ColorCounter
            onIncrease={() => setColor('red', COLOR_INCREASE)}
            onDecrease={() => setColor("red" -1 * COLOR_INCREASE)}
            
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