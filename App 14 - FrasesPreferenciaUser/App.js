import { View, Text, Switch } from 'react-native';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightMode: false,
      smallFont: false
    };
  }

  async componentDidMount() {
    try {
      await AsyncStorage.getItem('lightMode').then((value) =>
        this.setState({ lightMode: JSON.parse(value) })
      );
      await AsyncStorage.getItem('smallFont').then((value) =>
        this.setState({ smallFont: JSON.parse(value) })
      );
    } catch (error) {
      console.error('Error mount: ', error);
    }
  }

  async storageLightMode(state) {
    try {
      this.setState({ lightMode: state })
      const storageLightMode = await AsyncStorage.getItem('lightMode').then(
        (value) => value && JSON.parse(value)
      );
      if (!storageLightMode || storageLightMode != state)
        await AsyncStorage.setItem('lightMode', JSON.stringify(state));
    } catch (error) {
      console.error('Error setLightMode: ', error);
    }
  }

  async storageSmallFont(state) {
    try {
      this.setState({ smallFont: state })
      const storageSmallFont = await AsyncStorage.getItem('smallFont').then(
        (value) => value && JSON.parse(value)
      );
      if (!storageSmallFont || storageSmallFont != state)
        await AsyncStorage.setItem('smallFont', JSON.stringify(state));
    } catch (error) {
      console.error('Error setSmallFont: ', error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Frases </Text>
        <View style={styles.options}>
          <Text style={styles.text}> Light Mode </Text>
          <Switch
            value={this.state.lightMode}
            onValueChange={(state) => this.storageLightMode(state)}
          />
          <Text style={styles.text}> Small Font </Text>
          <Switch
            value={this.state.smallFont}
            onValueChange={(state) => this.storageSmallFont(state)}
          />
        </View>
        <View
          style={[
            styles.fraseContainer,
            this.state.lightMode ? styles.bgDay : styles.bgNight,
          ]}>
          <Text
            style={[
              this.state.smallFont ? styles.textSmall : styles.textBig,
              this.state.lightMode ? styles.textBlack : styles.textWhite,
            ]}>
            "A vingança nunca é plena, mata a alma e a envenena."
            {'\n'}(Seu Madruga)
          </Text>
        </View>
      </View>
    );
  }
}

export default App;