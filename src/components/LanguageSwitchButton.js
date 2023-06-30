import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const LanguageSwitchButton = ({ language, flag, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgUri uri={flag} width={30} height={30} />
      <Text style={styles.languageName}>{language}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  languageName: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LanguageSwitchButton;