import React from 'react';
import { Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
 
export default function Button(props){
  const navigation = useNavigation();
 
  const irInfos = () => {
    navigation.navigate('Sinopse', { ...props });
  }
 
  return(
    <Pressable 
      onPress={() => irInfos()} 
      style={[styles.button, styles.buttonBlue]}
    >
      <Text style={styles.buttonText}> Ler mais </Text>
    </Pressable>
  )
}