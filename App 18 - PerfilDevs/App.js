import axios from 'axios';
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './style';

const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [currentURL, setCurrentURL] = useState("https://i.pinimg.com/736x/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.jpg")
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [mediaValue, setMediaValue] = useState('');
  const [reposValue, setReposValue] = useState('');
  const [followersValue, setFollowersValue] = useState('');
  const [followingValue, setFollowingValue] = useState('');
  const [createdValue, setCreatedValue] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const buscarDev = async () => {
    try {
      if (!currentUser)
        return alert('Por favor, preencher o login do usuário');
      setHasResult(false);
      const response = await axios(
        `https://api.github.com/users/${currentUser}`
      );
      const {
        avatar_url,
        id,
        name,
        twitter_username,
        public_repos,
        followers,
        following,
        created_at,
      } = response.data;
      setCurrentURL(avatar_url);
      setIdValue(id);
      setNameValue(name);
      setMediaValue(twitter_username);
      setReposValue(public_repos);
      setFollowersValue(followers);
      setFollowingValue(following);
      setCreatedValue(created_at);
      setHasResult(true);
    } catch (error) {
      console.error('Erro ao pesquisar dev: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Perfil de Devs </Text>
      <View style={styles.card}>
        <Image style={styles.img} source={{ uri: currentURL }} />
        <TextInput
          style={styles.input}
          placeholder="Digite nome de usuário"
          value={currentUser}
          onChangeText={(value) => setCurrentUser(value)}
        />
        <TouchableOpacity onPress={buscarDev}>
          <Text style={styles.botao}> Buscar </Text>
        </TouchableOpacity>
      </View>

      {hasResult && (
        <View style={styles.dataList}>
          <Text style={styles.infoTitle}> ID: </Text>
          <Text style={styles.userInfo}> {idValue} </Text>

          <Text style={styles.infoTitle}> Nome: </Text>
          <Text style={styles.userInfo}> {nameValue} </Text>

          <Text style={styles.infoTitle}> Twitter: </Text>
          <Text style={styles.userInfo}> {mediaValue} </Text>
          
          <Text style={styles.infoTitle}> Repositórios: </Text>
          <Text style={styles.userInfo}> {reposValue} </Text>
          
          <Text style={styles.infoTitle}> Seguidores: </Text>
          <Text style={styles.userInfo}> {followersValue} </Text>
          
          <Text style={styles.infoTitle}> Seguindo: </Text>
          <Text style={styles.userInfo}> {followingValue} </Text>
          
          <Text style={styles.infoTitle}> Criado em: </Text>
          <Text style={styles.userInfo}> {createdValue} </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
