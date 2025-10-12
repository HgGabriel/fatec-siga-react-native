import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';

export default function DisciplinasScreen() {
  return (
    <ScrollView className="flex-1">
      <View className="p-6 gap-4">
        <Text className="text-2xl font-bold">Disciplinas</Text>
        <Text className="text-muted-foreground">Suas disciplinas matriculadas</Text>
      </View>
    </ScrollView>
  );
}
