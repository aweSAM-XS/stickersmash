import { StyleSheet, Image } from 'react-native';
import React from 'react';

const ImageViewer = ({ placeholder, selectedImage }) => {
  const source = selectedImage
    ? { uri: selectedImage }
    : placeholder;

  return <Image source={source} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 440,
    borderRadius: 18,
  },
});
