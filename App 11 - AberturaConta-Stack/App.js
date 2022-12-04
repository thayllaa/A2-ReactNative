import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Form from './src/pages/Form/index';
import Info from './src/pages/Info/index';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Abertura de Conta:" component={Form} />
        <Stack.Screen name="Informações:" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}