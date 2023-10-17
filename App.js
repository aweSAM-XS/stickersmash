import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useState } from 'react';
import ImageViewer from './app/components/ImageViewer';
import Button from './app/components/Button';
import * as ImagePicker from 'expo-image-picker';
let PlaceholderImage = require('./app/assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#25292e'} />
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholder={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.cta}>
        <Button
          label='Choose a photo'
          theme='primary'
          onPress={pickImageAsync}
        />
        <Button
          label='Use this photo'
          onPress={() => alert(`You pressed button`)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    paddingTop: 58,
    width: '80%',
  },
  cta: {
    alignItems: 'center',
    flex: 1 / 2,
    rowGap: 10,
  },
});
