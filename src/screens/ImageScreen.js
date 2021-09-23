import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../Components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>

            <ImageDetails
                title='Forest'
                imageSource={require('../../assets/forest.jpg')}
                score={5}
            />
            <ImageDetails
                title="Mountains"
                imageSource={require('../../assets/mountain.jpg')}
                score={6}
            />

            <ImageDetails
                title="Bech"
                imageSource={require('../../assets/beach.jpg')}
                score={10}
            />

        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen;