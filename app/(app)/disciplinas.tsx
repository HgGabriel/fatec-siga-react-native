import { ScrollView, View, Text } from 'react-native';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { mockStudent } from '@/data/mockStudent';
import { BookOpen, User } from 'lucide-react-native';

export default function DisciplinasScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-6 gap-4 space-y-6">
        {/* Cabeçalho da Página */}
        <View className="mb-2">
          <Text className="text-3xl font-bold text-foreground">Disciplinas</Text>
          <Text className="text-lg text-muted-foreground">
            Matriculadas neste semestre
          </Text>
        </View>

        {/* Lista de Cards de Disciplina */}
        {mockStudent.subjects.map((subject) => {
          // Lógica de cálculo para cada disciplina
          const grades = Object.values(subject.grades).filter((g): g is number => g !== null);
          const average = grades.length > 0 ? grades.reduce((a, b) => a + b, 0) / grades.length : 0;
          const attendanceRate = ((subject.attendance.totalClasses - subject.attendance.absences) / subject.attendance.totalClasses) * 100;

          return (
            <Card key={subject.subject.code}>
              <CardHeader className="flex-row items-start gap-4">
                {/* Ícone */}
                <View className="w-12 h-12 bg-primary/10 rounded-lg justify-center items-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </View>
                {/* Título e Código */}
                <View className="flex-1">
                  <CardTitle className="text-lg leading-tight">{subject.subject.name}</CardTitle>
                  <Text className="text-sm text-muted-foreground mt-1">
                    Código: {subject.subject.code}
                  </Text>
                </View>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Professor */}
                <View className="flex-row items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <Text className="text-sm text-muted-foreground">{subject.professor}</Text>
                </View>

                <Separator />

                {/* Média e Frequência */}
                <View className="flex-row justify-around">
                  <View className="items-center">
                    <Text className="text-sm text-muted-foreground mb-1">Média Atual</Text>
                    <Text className="text-2xl font-bold text-foreground">
                      {average > 0 ? average.toFixed(1) : '-'}
                    </Text>
                  </View>
                  <View className="items-center">
                    <Text className="text-sm text-muted-foreground mb-1">Frequência</Text>
                    <Text className="text-2xl font-bold text-foreground">
                      {attendanceRate.toFixed(0)}%
                    </Text>
                  </View>
                </View>

                <Separator />

                {/* Notas Individuais */}
                <View>
                  <Text className="text-xs text-muted-foreground mb-2">Notas Lançadas</Text>
                  <View className="flex-row gap-2">
                    {Object.entries(subject.grades).map(([key, value]) => (
                      <View
                        key={key}
                        className={`flex-1 items-center py-2 rounded-lg ${
                          value !== null ? 'bg-primary/10' : 'bg-muted'
                        }`}
                      >
                        <Text className="text-xs font-medium text-muted-foreground">{key}</Text>
                        <Text className={`text-sm font-bold ${
                          value !== null ? 'text-primary' : 'text-muted-foreground'
                        }`}>
                          {value !== null ? value.toFixed(1) : '-'}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </CardContent>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}