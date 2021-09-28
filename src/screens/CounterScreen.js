import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increament':
            return { ...state, count: state.count + action.payload };
        case 'decreament':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}


const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return <View>
        <Button
            title='Increase Counter'
            onPress={()=> dispatch({type: 'increament', payload: 1})} />
        <Button
            title='Increase Counter'
            onPress={()=> dispatch({type: 'decreament', payload: 1})} />

        <Text>Counter Value: {state.count}</Text>
    </View>
}

const styles = StyleSheet.create({})


export default CounterScreen;