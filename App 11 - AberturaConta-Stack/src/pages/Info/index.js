import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

export default function Info({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:</Text>
      <Text> {route.params?.nome} </Text>
      
      <Text style={styles.texto}>Idade:</Text>
      <Text> {route.params?.idade} </Text>

      <Text style={styles.texto}>Sexo:</Text>
      <Text> {route.params?.sexo} </Text>

      <Text style={styles.texto}>Escolaridade:</Text>
      <Text> {route.params?.escolaridade} </Text>

      <Text style={styles.texto}>Limite:</Text>
      <Text> {route.params?.valLimite} </Text>

      <Text style={styles.textoFinal}>Brasileiro:</Text>
      <Text> {route.params?.br} </Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
