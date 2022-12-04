import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tarefas from './src/pages/Tarefas/index';
import Form from './src/pages/Form/index';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tarefas" component={Tarefas} />
          <Stack.Screen name="Formulario" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;