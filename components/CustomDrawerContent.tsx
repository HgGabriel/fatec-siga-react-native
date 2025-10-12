import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { View, Text, Image, Pressable } from 'react-native';
import { router } from 'expo-router';
import { LogOut } from 'lucide-react-native';
import { mockStudent } from '@/data/mockStudent';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Pressable 
          onPress={() => router.push('/perfil')}
          className="p-4 border-b border-gray-200 dark:border-gray-700 mb-2"
        >
          <View className="flex-row items-center gap-4">
            <Image
              source={{ uri: mockStudent.profilePhoto }}
              className="w-16 h-16 rounded-full border-2 border-blue-500"
            />
            <View>
              <Text className="text-lg font-bold text-gray-900 dark:text-white">
                {mockStudent.name}
              </Text>
              <Text className="text-sm text-gray-600 dark:text-gray-400">
                RA: {mockStudent.ra}
              </Text>
            </View>
          </View>
        </Pressable>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Pressable
          onPress={handleLogout}
          className="flex-row items-center gap-3 p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30"
        >
          <LogOut className="w-5 h-5 text-red-600 dark:text-red-500" />
          <Text className="font-medium text-red-600 dark:text-red-500">
            Sair
          </Text>
        </Pressable>
      </View>
    </View>
  );
}