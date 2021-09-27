// import React from 'react';
// import { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import ColorCounter from '../Components/ColorCounter';
// const SquireScreen = () => {
//     const [red, setRed] = useState(0);
//     const [green, setGreen] = useState(0);
//     const [blue, setBlue] = useState(0);
//     console.log(red);
//     const COLOR_COUNTER = 15;
//     const setColor = (color, change) => {
//         switch (color) {
//             case 'red':
//                 red + change > 255 || red + change < 0 ? null : setRed(red + change);
//                 return;
//             case 'green':
//                 green + change > 255 || green + change < 0 ? null : setGreen(green + change);
//                 return;
//             case 'blue':
//                 blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
//                 return;
//             default:
//                 return;
//         }
//     }


//     return (
//         <View>
//             <ColorCounter
//                 onIncrease={() => setColor("red", COLOR_COUNTER)}
//                 onDecrease={() => setColor("red", -1 * COLOR_COUNTER)}
//                 color='red'
//             />
//             <ColorCounter
//                 onIncrease={() => setColor("green", COLOR_COUNTER)}
//                 onDecrease={() => setColor("green", -1 * COLOR_COUNTER)}
//                 color='green'
//             />
//             <ColorCounter
//                 onIncrease={() => setColor("blue", COLOR_COUNTER)}
//                 onDecrease={() => setColor("blue", -1 * COLOR_COUNTER)}
//                 color='blue'
//             />
//             <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
//         </View>
//     )
// }
// const styles = StyleSheet.create({})

// export default SquireScreen;


import React from 'react';
import { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';


const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquireScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    const COLOR_COUNTER = 15;


    return (
        <View>
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color='red'
            />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color='green'
            />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color='blue'
            />
            <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}
const styles = StyleSheet.create({})

export default SquireScreen;