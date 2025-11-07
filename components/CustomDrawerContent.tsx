import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { View, Text, Image, Pressable } from 'react-native';
import { router } from 'expo-router';
import { LogOut, User } from 'lucide-react-native';
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
          className="p-4 mb-2 border-b border-border"
        >
          <View className="flex-row items-center gap-4">
            {mockStudent.profilePhoto ? (
              <Image
                source={{ uri: mockStudent.profilePhoto }}
                className="w-16 h-16 border-2 rounded-full border-primary"
              />
            ) : (
              <View className="w-16 h-16 border-2 rounded-full border-primary bg-muted items-center justify-center">
                <User className="text-primary" size={32} />
              </View>
            )}
            <View>
              <Text className="text-lg font-bold text-foreground">
                {mockStudent.name}
              </Text>
              <Text className="text-sm text-muted-foreground">
                RA: {mockStudent.ra}
              </Text>
            </View>
          </View>
        </Pressable>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View className="p-4 border-t border-border">
        <Pressable
          onPress={handleLogout}
          className="flex-row items-center gap-3 p-2 rounded-lg hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5 text-destructive" />
          <Text className="font-medium text-destructive">
            Sair
          </Text>
        </Pressable>
      </View>
    </View>
  );
}