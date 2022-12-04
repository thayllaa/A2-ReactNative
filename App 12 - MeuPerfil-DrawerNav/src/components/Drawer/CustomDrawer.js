import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
 
export default function CustomDrawer(props){
  return(
    <DrawerContentScrollView {...props} >
      <View style={{
      width: '100%', height: 100, alignItems: 'center', justifyContent: 'center',
      marginTop: 25
      }}>
        <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/100003483?v=4' }}
        style={{ width: 75, height: 75, marginTop: 25, borderRadius:50}}
        />
        <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom:45}}>
          Thaylla de Santana Bispo dos Santos
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
