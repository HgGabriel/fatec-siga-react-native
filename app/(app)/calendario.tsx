import { useState } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { mockActivities, Activity } from '@/data/mockStudent';
import { FilePenLine, ClipboardList, Mic, Calendar as CalendarIcon, Clock } from 'lucide-react-native';

// --- Funções Auxiliares ---

// Mapeia o tipo de atividade para um ícone e cor específicos
const getActivityVisuals = (type: string) => {
  switch (type) {
    case 'exam':
      return { Icon: FilePenLine, color: 'bg-red-500' };
    case 'assignment':
      return { Icon: ClipboardList, color: 'bg-blue-500' };
    case 'presentation':
      return { Icon: Mic, color: 'bg-purple-500' };
    default:
      return { Icon: CalendarIcon, color: 'bg-gray-500' };
  }
};

// Agrupa as atividades por período de tempo
const groupActivities = (activities: Activity[]) => {
  const groups: { [key: string]: Activity[] } = {
    Hoje: [],
    Amanhã: [],
    'Esta Semana': [],
    'Próximos': [],
    Concluídos: [],
  };

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (7 - today.getDay()));

  activities
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .forEach((activity) => {
      const activityDate = new Date(new Date(activity.date).getFullYear(), new Date(activity.date).getMonth(), new Date(activity.date).getDate());
      
      if (activityDate < today) {
        groups.Concluídos.push(activity);
      } else if (activityDate.getTime() === today.getTime()) {
        groups.Hoje.push(activity);
      } else if (activityDate.getTime() === tomorrow.getTime()) {
        groups.Amanhã.push(activity);
      } else if (activityDate <= endOfWeek) {
        groups['Esta Semana'].push(activity);
      } else {
        groups.Próximos.push(activity);
      }
    });

  return Object.entries(groups)
    .filter(([, activities]) => activities.length > 0)
    .map(([title, data]) => ({ title, data }));
};

// --- Componente da Tela ---

export default function CalendarioScreen() {
  const groupedActivities = groupActivities(mockActivities);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <>
      <ScrollView className="flex-1 bg-background">
        <View className="p-6">
          {/* Cabeçalho da Página */}
          <View className="mb-6">
            <Text className="text-3xl font-bold text-foreground">Calendário Acadêmico</Text>
            <Text className="text-lg text-muted-foreground">
              Suas próximas atividades e prazos.
            </Text>
          </View>

          {/* Acordeão com os grupos de atividades */}
          <Accordion type="multiple" defaultValue={['Hoje', 'Amanhã', 'Esta Semana']} className="w-full">
            {groupedActivities.map(({ title, data }) => (
              <AccordionItem key={title} value={title}>
                <AccordionTrigger>
                  <Text className="text-lg font-semibold text-foreground">{title}</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <View className="pl-4">
                    {/* Linha do tempo vertical */}
                    <View className="absolute left-9 top-0 h-full w-px bg-border" />
                    {data.map((activity) => {
                      const { Icon, color } = getActivityVisuals(activity.type);
                      const activityDate = new Date(activity.date);

                      return (
                        <Pressable key={activity.id} onPress={() => setSelectedActivity(activity)} className="flex-row items-start pb-8">
                          {/* Ponto na linha do tempo */}
                          <View className="z-10 mt-1">
                             <Avatar>
                                <AvatarFallback className={color}>
                                  <Icon className="w-5 h-5 text-white" />
                                </AvatarFallback>
                             </Avatar>
                          </View>
                          {/* Card da Atividade */}
                          <View className="ml-4 flex-1">
                            <Card className="shadow-md dark:shadow-primary/20">
                              <CardHeader>
                                <CardTitle className="leading-tight">{activity.title}</CardTitle>
                                <CardDescription>{activity.subject}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <View className="flex-row items-center gap-2">
                                  <Clock className="w-4 h-4 text-muted-foreground" />
                                  <Text className="text-sm text-muted-foreground">
                                    {activityDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })}
                                  </Text>
                                </View>
                              </CardContent>
                            </Card>
                          </View>
                        </Pressable>
                      );
                    })}
                  </View>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </View>
      </ScrollView>

      {/* Dialog para Detalhes da Atividade */}
      <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedActivity?.title}</DialogTitle>
            <DialogDescription>{selectedActivity?.subject}</DialogDescription>
          </DialogHeader>
          <View className="my-4">
            <Text className="text-base text-muted-foreground">
              <Text className="font-bold text-foreground">Data:</Text> {selectedActivity && new Date(selectedActivity.date).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
            </Text>
            <Badge variant={selectedActivity?.type === 'exam' ? 'destructive' : 'default'} className="mt-2 self-start">
              <Text className="text-white font-bold">{selectedActivity?.type === 'exam' ? 'Prova' : 'Trabalho'}</Text>
            </Badge>
          </View>
          <DialogFooter>
            <DialogClose asChild>
              <Button>
                <Text>Fechar</Text>
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}