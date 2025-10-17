import { ScrollView, View, Text } from 'react-native';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockStudent } from '@/data/mockStudent';
import { AlertTriangle, ShieldCheck, ShieldAlert } from 'lucide-react-native';

// A função de cálculo pode ficar fora do componente para otimização
const calculateAverage = (grades: { P1: number | null; P2: number | null; T: number | null; P3: number | null }) => {
  const validGrades = Object.values(grades).filter((g): g is number => g !== null);
  if (validGrades.length === 0) return 0;
  return validGrades.reduce((a, b) => a + b, 0) / validGrades.length;
};

export default function NotasScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-6 gap-4 space-y-6">
        {/* Cabeçalho da Página */}
        <View className="mb-2">
          <Text className="text-3xl font-bold text-foreground">Notas</Text>
          <Text className="text-lg text-muted-foreground">
            Visualize seu desempenho por disciplina
          </Text>
        </View>

        {/* Lista de Cards de Notas */}
        {mockStudent.subjects.map((subject) => {
          const average = calculateAverage(subject.grades);
          const status = average >= 6 ? 'approved' : average >= 5 ? 'recovery' : 'failed';

          return (
            <Card key={subject.subject.code}>
              <CardHeader>
                <View className="flex-row items-start justify-between">
                  <View className="flex-1 pr-2">
                    <CardTitle className="leading-tight">{subject.subject.name}</CardTitle>
                    <Text className="text-sm text-muted-foreground mt-1">
                      {subject.professor}
                    </Text>
                  </View>
                  <Badge
                    variant={
                      status === 'approved' ? 'default' : status === 'recovery' ? 'secondary' : 'destructive'
                    }
                  >
                    <Text className="text-white font-bold">
                      Média: {average > 0 ? average.toFixed(1) : '-'}
                    </Text>
                  </Badge>
                </View>
              </CardHeader>
              <CardContent>
                {/* Grid 2x2 para as notas */}
                <View className="flex-row flex-wrap justify-between">
                  {Object.entries(subject.grades).map(([key, value]) => {
                    const gradeColor = value === null ? 'text-muted-foreground' : value >= 6 ? 'text-green-600 dark:text-green-500' : value >= 5 ? 'text-yellow-600 dark:text-yellow-500' : 'text-red-600 dark:text-red-500';
                    return (
                      <View key={key} className="w-[48%] bg-muted/50 p-3 rounded-lg mb-3">
                        <Text className="text-sm text-muted-foreground">{key}</Text>
                        <Text className={`text-2xl font-bold ${gradeColor}`}>
                          {value !== null ? value.toFixed(1) : '-'}
                        </Text>
                      </View>
                    );
                  })}
                </View>

                {/* Mensagem de Status Condicional */}
                {status !== 'approved' && (
                  <View className={`flex-row items-center p-3 rounded-lg mt-2 ${status === 'recovery' ? 'bg-yellow-500/10' : 'bg-red-500/10'}`}>
                    {status === 'recovery' ? <ShieldAlert className="w-5 h-5 text-yellow-600" /> : <AlertTriangle className="w-5 h-5 text-red-600" />}
                    <Text className={`ml-2 text-sm font-medium ${status === 'recovery' ? 'text-yellow-800 dark:text-yellow-500' : 'text-red-800 dark:text-red-500'}`}>
                      {status === 'recovery' ? 'Atenção: Você está em recuperação.' : 'Média insuficiente. Procure ajuda.'}
                    </Text>
                  </View>
                )}
              </CardContent>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}