import { useState } from 'react';
import { Text, TextInput, View, Switch, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

export default function Form() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [limite, setLimite] = useState(0);
  const [br, setBr] = useState(false);
  var brCheck = 'Não';

  function verDados() {
    if (br == true) {
      brCheck = 'Sim';
    } else {
      brCheck = 'Não';
    }
    navigation.navigate('Info', {
      nome: nome,
      idade: idade,
      sexo: sexo,
      escolaridade: escolaridade,
      limite: limite,
      br: brCheck,
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h1}> Nome </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#a4a4a4"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.h1}> Idade </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Idade"
          placeholderTextColor="#a4a4a4"
          value={idade}
          onChangeText={setIdade}
        />

        <Text style={styles.h1}> Sexo </Text>
        <Picker
          style={styles.picker}
          value={sexo}
          onValueChange={setSexo}>
          <Picker.Item value={'M'} label="Masculino" />
          <Picker.Item value={'F'} label="Feminino" />
        </Picker>

        <Text style={styles.h1}> Escolaridade </Text>
        <Picker
          style={styles.picker}
          value={escolaridade}
          onValueChange={setEscolaridade}>
          <Picker.Item value={"EF"} label="Ensino Fundamental" />
        <Picker.Item value={"EM"} label="Ensino Médio" />
        <Picker.Item value={"ET"} label="Ensino Técnico" />
        <Picker.Item value={"ES"} label="Ensino Superior" />
        <Picker.Item value={"PG"} label="Pós-Graduação" />
        <Picker.Item value={"M"} label="Mestrado" />
        <Picker.Item value={"D"} label="Doutorado" />
        </Picker>

        <Text style={styles.h1}> Limite: {limite} </Text>
        <Slider style={styles.slider}
          minimumValue={100}
          maximumValue={1000}
          step={25}
          onValueChange={setLimite}
          value={limite}
        />

        <Text style={styles.h1}> Brasileiro </Text>
        <Switch style={styles.limite}
          value={br}
          onValueChange={setBr}
        />

        <Pressable onPress={verDados} style={styles.button}>
          <Text style={styles.txtButton}> Confirmar </Text>
        </Pressable>
      </View>
    </View>
  );
}
