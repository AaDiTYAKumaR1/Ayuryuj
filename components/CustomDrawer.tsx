import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* User Profile Section */}
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
      </View>

      {/* Default Drawer Items */}
      <DrawerItemList {...props} />

      {/* Logout Button */}
      <TouchableOpacity style={{ padding: 10, marginLeft: 15 }} onPress={() => alert('Logging Out')}>
        <Text style={{ color: 'red', fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
