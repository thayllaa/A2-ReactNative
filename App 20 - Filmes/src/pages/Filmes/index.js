import { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';

import { styles } from './style';
import Button from '../../components/Button';
 
class Filmes extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      errorMessage: '',
      filmes: []
    };
    
  }

  async componentDidMount(){
    try {
      const response = await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes');
      this.setState({
        loading: false,
        filmes: response.data
      });
    }catch(error) {
      console.error("Erro ao carregar os filmes: ", error)
      this.setState({ loading: false, errorMessage: error.message ? error.message : error })
    }
  }

  render(){

    return(
      <View style={styles.container}>
        {
          this.state.loading && <Text style={styles.loading}> Carregando filmes... </Text>
        }
        {
          (!this.state.loading && !this.state.errorMessage) &&
          <ScrollView>
            {
              this.state.filmes.map(({ nome, foto, sinopse }) => {
                return (
                  <View style={styles.card}>
                    <View style={styles.foto}>
                      <Image 
                        source={{ uri: foto }}
                        style={{ width: 250, height: 130, resizeMode: 'contain' }}
                      />
                    </View>
                    <Text style={styles.subTitle}>{`${nome}`}</Text>
                    <Text style={styles.textCard}>{`${sinopse.substr(0, 72)}...`}</Text>
                    <Button props={{ nome, sinopse }} />
                  </View>
                )
              })
            }
          </ScrollView>
        }
        {
          this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>
        }
      </View>
    );
  }
}
 
export default Filmes;