import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';

export default function PresencaScreen() {
  return (
    <ScrollView className="flex-1">
      <View className="p-6 gap-4">
        <Text className="text-2xl font-bold">Presença</Text>
        <Text className="text-muted-foreground">Acompanhe sua frequência nas disciplinas</Text>
      </View>
    </ScrollView>
  );
}
