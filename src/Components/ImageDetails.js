import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetails = ({ imageSource, title, score }) => {
    return <View>
        <Image
            style={{ width: 150, height: 150 }}
            source={imageSource} />
        <Text>{title}</Text>
        <Text>Image Score - {score}</Text>
    </View>

}

const styles = StyleSheet.create({})

export default ImageDetails;