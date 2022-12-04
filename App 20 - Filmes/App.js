import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Filmes from './src/pages/Filmes/index';
import Sinopse from './src/pages/Sinopse';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filmes" component={Filmes} />
        <Stack.Screen name="Sinopse" component={Sinopse} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}