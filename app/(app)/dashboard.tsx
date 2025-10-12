import { ScrollView, View, Text } from 'react-native';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockStudent, mockActivities } from '@/data/mockStudent';
import { BookOpen, Users, TrendingUp, Calendar } from 'lucide-react-native';

const totalSubjects = mockStudent.subjects.length;

const averageGrade = (
  mockStudent.subjects.reduce((acc, subject) => {
    const grades = Object.values(subject.grades).filter((g): g is number => g !== null);
    if (grades.length === 0) return acc;
    const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
    return acc + avg;
  }, 0) / totalSubjects
).toFixed(1);

const totalAbsences = mockStudent.subjects.reduce((acc, subject) => acc + subject.attendance.absences, 0);

const attendanceRate = (
  mockStudent.subjects.reduce((acc, subject) => {
    const rate = ((subject.attendance.totalClasses - subject.attendance.absences) / subject.attendance.totalClasses) * 100;
    return acc + rate;
  }, 0) / totalSubjects
).toFixed(0);

const upcomingActivities = mockActivities.slice(0, 4);

export default function DashboardScreen() {
  const firstName = mockStudent.name.split(' ')[0];

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-6 gap-4 space-y-6">
        <View>
          <Text className="text-3xl font-bold text-foreground mb-1">
            Olá, {firstName}! 👋
          </Text>
          <Text className="text-lg text-muted-foreground">
            Seu resumo acadêmico.
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          <Card className="w-[48%] mb-4">
            <CardHeader>
              <View className="flex-row items-center justify-between">
                <Text className="text-muted-foreground">Disciplinas</Text>
                <BookOpen className="w-5 h-5 text-primary" />
              </View>
            </CardHeader>
            <CardContent>
              <Text className="text-3xl font-bold text-foreground">{totalSubjects}</Text>
              <Text className="text-xs text-muted-foreground">cursando</Text>
            </CardContent>
          </Card>

          <Card className="w-[48%] mb-4">
            <CardHeader>
              <View className="flex-row items-center justify-between">
                <Text className="text-muted-foreground">Média Geral</Text>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </View>
            </CardHeader>
            <CardContent>
              <Text className="text-3xl font-bold text-foreground">{averageGrade}</Text>
              <Text className="text-xs text-green-500">✓ dentro do esperado</Text>
            </CardContent>
          </Card>

          <Card className="w-[48%]">
            <CardHeader>
              <View className="flex-row items-center justify-between">
                <Text className="text-muted-foreground">Presença</Text>
                <Users className="w-5 h-5 text-blue-500" />
              </View>
            </CardHeader>
            <CardContent>
              <Text className="text-3xl font-bold text-foreground">{attendanceRate}%</Text>
              <Text className="text-xs text-muted-foreground">{totalAbsences} faltas</Text>
            </CardContent>
          </Card>

          <Card className="w-[48%]">
            <CardHeader>
              <View className="flex-row items-center justify-between">
                <Text className="text-muted-foreground">Progresso</Text>
                <Calendar className="w-5 h-5 text-purple-500" />
              </View>
            </CardHeader>
            <CardContent>
              <Text className="text-3xl font-bold text-foreground">{mockStudent.courseProgress}%</Text>
              <Text className="text-xs text-muted-foreground">do curso</Text>
            </CardContent>
          </Card>
        </View>

        <Card>
          <CardHeader>
            <CardTitle>Próximas Atividades</CardTitle>
            <CardDescription>Fique de olho nas suas próximas entregas e provas.</CardDescription>
          </CardHeader>
          <CardContent>
            <View className="space-y-4 gap-2">
              {upcomingActivities.map((activity) => (
                <View
                  key={activity.id}
                  className="flex-row items-center"
                >
                  <View className="w-12 h-12 bg-muted rounded-lg justify-center items-center mr-4">
                    <Text className="text-xl font-bold text-foreground">
                      {new Date(activity.date).getDate()}
                    </Text>
                    <Text className="text-xs -mt-1 text-muted-foreground">
                      {new Date(activity.date).toLocaleString('pt-BR', { month: 'short' }).replace('.', '')}
                    </Text>
                  </View>

                  <View className="flex-1">
                    <Text className="font-semibold text-foreground" numberOfLines={1}>{activity.title}</Text>
                    <Text className="text-sm text-muted-foreground">{activity.subject}</Text>
                  </View>

                  <Badge
                    variant={
                      activity.type === 'exam' ? 'destructive' : 'default'
                    }
                  >
                    <Text className="text-white font-bold text-xs">
                      {activity.type === 'exam' ? 'Prova' : 'Trabalho'}
                    </Text>
                  </Badge>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}