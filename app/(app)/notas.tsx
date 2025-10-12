import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';

export default function NotasScreen() {
  return (
    <ScrollView className="flex-1">
      <View className="p-6 gap-4">
        <Text className="text-2xl font-bold">Notas</Text>
        <Text className="text-muted-foreground">Visualize suas notas e desempenho acadêmico</Text>
      </View>
    </ScrollView>
  );
}
