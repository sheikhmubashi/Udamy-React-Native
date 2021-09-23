import React, {useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return <View>
        <Button 
        title='Add a Color'
        onPress={()=>{setColors([...colors, rendomRgb()])}}
        />
        <View style={{width: 100, height: 100, backgroundColor: rendomRgb()}}></View>
    </View>
}

const rendomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({})

export default ColorScreen;