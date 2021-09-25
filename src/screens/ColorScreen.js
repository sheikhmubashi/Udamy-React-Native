import React from 'react';
import { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [color, setColor] = useState([]);

    return <View>
        <Button
            title='Add A Color'
            onPress={() => {
                setColor([...color, rendomRgb()]);
            }}
        />
        <FlatList
            keyExtractor={(item) => item}
            data={color}
            renderItem={({ item }) => {
                return <View style={{ width: 150, height: 150, backgroundColor: item }} />
            }}
        />
    </View>
}
const rendomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
};

export default ColorScreen;