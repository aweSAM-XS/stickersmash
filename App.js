import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useState } from 'react';
import ImageViewer from './app/components/ImageViewer';
import Button from './app/components/Button';
import * as ImagePicker from 'expo-image-picker';
import IconButton from './app/components/IconButton';
import CircleButton from './app/components/CircleButton';
import EmojiPicker from './app/components/EmojiPicker';
import EmojiList from './app/components/EmojiList';
let PlaceholderImage = require('./app/assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const onModalClose = () => {
    setIsModalVisible(false);
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

      {showAppOptions ? (
        <View style={styles.actionButtons}>
          <IconButton icon='refresh' label='Reset' onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View style={styles.optionButtons}>
          <Button
            label='Choose a photo'
            theme='primary'
            onPress={pickImageAsync}
          />
          <Button
            label='Use this photo'
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  optionButtons: {
    alignItems: 'center',
    flex: 1 / 2,
    rowGap: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    flex: 1 / 2,
    alignItems: 'center',
  },
});
