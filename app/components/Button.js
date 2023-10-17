import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Button = ({ label, theme, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.button,
          theme === 'primary' ? styles.primary : styles.secondary,
        ]}
        onPress={onPress}>
        {theme === 'primary' && (
          <FontAwesome
            name='picture-o'
            size={18}
            color='#fff'
            style={styles.buttonIcon}
          />
        )}
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: 'dodgerblue',
  },
  secondary: {
    backgroundColor: 'tomato',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 15,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
});
