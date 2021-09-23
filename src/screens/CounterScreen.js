import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return <View>
        <Button
            title='Increase Counter'
            onPress={() => { setCounter(counter + 1) }} />
        <Button
            title='Increase Counter'
            onPress={() => { setCounter(counter - 1) }} />

        <Text>Counter Value: {counter}</Text>
    </View>
}

const styles = StyleSheet.create({})


export default CounterScreen;