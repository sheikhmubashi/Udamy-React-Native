import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to ImageScreen'
        onPress={() => navigation.navigate('Image')} />
      <Button
        title='Go to Counter Screen'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Screen'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go TO Squire Screen"
        onPress={() => { navigation.navigate('Squire') }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
