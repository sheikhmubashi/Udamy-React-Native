import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';
const SquireScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red);
    const COLOR_COUNTER = 15;
    const setColor = (color, change) => {
        if (color === 'red') {
            if (red + change > 255 || red + change < 0) {
                return;
            } else {
                setRed(red + change);
            }
        }
    }

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor("red", COLOR_COUNTER)}
                onDecrease={() => setColor("red", -1 * COLOR_COUNTER)}
                color='red'
            />
            <ColorCounter
                onIncrease={() => setGreen(green + COLOR_COUNTER)}
                onDecrease={() => setGreen(green - COLOR_COUNTER)}
                color='green'
            />
            <ColorCounter
                onIncrease={() => setBlue(blue + COLOR_COUNTER)}
                onDecrease={() => setBlue(blue - COLOR_COUNTER)}
                color='blue'
            />
            <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquireScreen;