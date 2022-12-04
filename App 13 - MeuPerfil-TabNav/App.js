import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Pessoal from './src/pages/Pessoal/index';
import Formacao from './src/pages/Formacao/index';
import Experiencia from './src/pages/Experiencia/index';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Pessoal: {
    name: 'ios-people',
  },
  Formacao: {
    name: 'ios-school',
  },
  Experiencia: {
    name: 'ios-briefcase',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#121212',
          },
          activeTintColor: '#318CE7',
        }}>
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Formacao" component={Formacao} />
        <Tab.Screen name="Experiencia" component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
