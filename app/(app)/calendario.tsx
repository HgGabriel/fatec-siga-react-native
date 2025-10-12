import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';

export default function CalendarioScreen() {
  return (
    <ScrollView className="flex-1">
      <View className="p-6 gap-4">
        <Text className="text-2xl font-bold">Calendário</Text>
        <Text className="text-muted-foreground">Calendário acadêmico e eventos</Text>
      </View>
    </ScrollView>
  );
}
