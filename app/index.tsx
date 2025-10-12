import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { router, Stack } from 'expo-router';
import { View } from 'react-native';

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login', headerShown: false }} />
      <View className="flex-1 items-center justify-center gap-4 p-6">
        <Text className="text-3xl font-bold">Login</Text>
        <Text className="text-muted-foreground">Bem-vindo ao Sistema Acadêmico</Text>
        <Button onPress={() => router.replace('/dashboard')} className="w-full mt-4">
          <Text>Entrar</Text>
        </Button>
      </View>
    </>
  );
}
