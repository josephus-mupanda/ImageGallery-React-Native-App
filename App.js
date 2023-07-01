import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageGallery from './src/components/ImageGallery';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageGallery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

