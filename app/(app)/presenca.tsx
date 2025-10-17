import { ScrollView, View, Text } from 'react-native';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockStudent } from '@/data/mockStudent';
import { ShieldCheck, ShieldAlert, AlertTriangle } from 'lucide-react-native';

export default function PresencaScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-6 gap-4 space-y-6">
        {/* Cabeçalho da Página */}
        <View className="mb-2">
          <Text className="text-3xl font-bold text-foreground">Presença</Text>
          <Text className="text-lg text-muted-foreground">
            Acompanhe sua frequência em cada disciplina
          </Text>
        </View>

        {/* Lista de Cards de Presença */}
        {mockStudent.subjects.map((subject) => {
          const attendanceRate = ((subject.attendance.totalClasses - subject.attendance.absences) / subject.attendance.totalClasses) * 100;
          const status = attendanceRate >= 75 ? 'safe' : attendanceRate >= 70 ? 'warning' : 'danger';
          const presences = subject.attendance.totalClasses - subject.attendance.absences;

          // Define a cor baseada no status para reutilização
          const statusColor = status === 'safe' ? 'text-green-600 dark:text-green-500' : status === 'warning' ? 'text-yellow-600 dark:text-yellow-500' : 'text-red-600 dark:text-red-500';
          const statusBgColor = status === 'safe' ? 'bg-green-500' : status === 'warning' ? 'bg-yellow-500' : 'bg-red-500';

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
                      status === 'safe' ? 'default' : status === 'warning' ? 'secondary' : 'destructive'
                    }
                    className="flex-row items-center gap-1"
                  >
                    {status === 'safe' && <ShieldCheck className="w-3 h-3 text-white" />}
                    {status === 'warning' && <ShieldAlert className="w-3 h-3 text-white" />}
                    {status === 'danger' && <AlertTriangle className="w-3 h-3 text-white" />}
                    <Text className="text-white font-bold">
                      {attendanceRate.toFixed(0)}%
                    </Text>
                  </Badge>
                </View>
              </CardHeader>
              <CardContent>
                {/* Barra de Progresso com cor dinâmica */}
                <Progress value={attendanceRate} className="h-3" indicatorClassName={statusBgColor} />
                
                {/* Resumo Numérico */}
                <View className="flex-row justify-between items-center mt-4">
                  <Text className="text-base text-muted-foreground">
                    Presente em <Text className="font-bold text-foreground">{presences}</Text> de <Text className="font-bold text-foreground">{subject.attendance.totalClasses}</Text> aulas
                  </Text>
                  <View className="items-end">
                    <Text className="text-2xl font-bold text-destructive">{subject.attendance.absences}</Text>
                    <Text className="text-xs text-muted-foreground -mt-1">Faltas</Text>
                  </View>
                </View>

                {/* Mensagem de Status Condicional */}
                {(status === 'warning' || status === 'danger') && (
                  <>
                    <Separator className="my-4" />
                    <View className={`flex-row items-center p-3 rounded-lg ${status === 'warning' ? 'bg-yellow-500/10' : 'bg-red-500/10'}`}>
                      {status === 'warning' ? <ShieldAlert className="w-5 h-5 text-yellow-600" /> : <AlertTriangle className="w-5 h-5 text-red-600" />}
                      <Text className={`ml-2 text-sm font-medium flex-1 ${status === 'warning' ? 'text-yellow-800 dark:text-yellow-500' : 'text-red-800 dark:text-red-500'}`}>
                        {status === 'warning' ? 'Sua frequência está próxima do limite mínimo de 75%.' : 'Frequência abaixo de 75%. Risco de reprovação por falta!'}
                      </Text>
                    </View>
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}