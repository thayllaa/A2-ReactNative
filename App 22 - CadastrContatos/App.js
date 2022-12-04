import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Form from './src/pages/Form/index';
import Contatos from './src/pages/Contatos/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contatos" component={Contatos} />
        <Stack.Screen name="Formulario" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
