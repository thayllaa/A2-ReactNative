import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
 
import Pessoal from './src/pages/Pessoal';
import Sobre from './src/pages/Formacao';
import Contato from './src/pages/Experiencia';
 
import CustomDrawer from './src/components/Drawer/CustomDrawer';
 
export default function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    >
      <Drawer.Screen name="Pessoal" component={Pessoal} />
      <Drawer.Screen name="Formação" component={Sobre} />
      <Drawer.Screen name="Experiência" component={Contato} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
 