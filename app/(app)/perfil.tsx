import { useState } from 'react';
import { ScrollView, View, Text, Image, Pressable, Alert } from 'react-native';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { mockStudent } from '@/data/mockStudent'; // Reutilize seu mock de dados
import { Camera, Hash, Mail, User } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import { Separator } from '@rn-primitives/context-menu';

const averageGrade = (
  mockStudent.subjects.reduce((acc, subject) => {
    const grades = Object.values(subject.grades).filter((g) => g !== null) as number[];
    if (grades.length === 0) return acc;
    const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
    return acc + avg;
  }, 0) / mockStudent.subjects.length
).toFixed(1);

const attendanceRate = (
  mockStudent.subjects.reduce((acc, subject) => {
    const rate =
      ((subject.attendance.totalClasses - subject.attendance.absences) /
        subject.attendance.totalClasses) *
      100;
    return acc + rate;
  }, 0) / mockStudent.subjects.length
).toFixed(0);

export default function PerfilScreen() {
  const [profilePhoto, setProfilePhoto] = useState(mockStudent.profilePhoto);

  const handlePhotoClick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permissão necessária',
        'Precisamos de acesso à sua galeria para alterar a foto.'
      );
      return;
    }

    Alert.alert('Foto de Perfil', 'Escolha uma opção', [
      {
        text: 'Escolher da Galeria',
        onPress: async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
          });

          if (!result.canceled) {
            setProfilePhoto(result.assets[0].uri);
            Alert.alert('Sucesso', 'Foto de perfil atualizada!');
          }
        },
      },
      {
        text: 'Tirar Foto',
        onPress: async () => {
          const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
          if (cameraPermission.status !== 'granted') {
            Alert.alert(
              'Permissão necessária',
              'Precisamos de acesso à sua câmera para tirar uma foto.'
            );
            return;
          }

          let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
          });

          if (!result.canceled) {
            setProfilePhoto(result.assets[0].uri);
            Alert.alert('Sucesso', 'Foto de perfil atualizada!');
          }
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="gap-3 space-y-6 p-6">
        <View className="mb-2">
          <Text className="text-3xl font-bold text-foreground">Meu Perfil</Text>
          <Text className="mt-1 text-muted-foreground">
            Visualize e edite suas informações pessoais
          </Text>
        </View>

        <Card>
          <CardHeader>
            <CardTitle>Foto de Perfil</CardTitle>
          </CardHeader>
          <CardContent className="items-center">
            <View className="relative">
              {profilePhoto ? (
                <Image
                  source={{ uri: profilePhoto }}
                  className="h-40 w-40 rounded-full border-4 border-primary object-cover"
                />
              ) : (
                <View className="h-40 w-40 rounded-full border-4 border-primary bg-muted object-cover items-center justify-center">
                  <User className="text-primary" size={60} />
                </View>
              )}
              <Pressable
                onPress={handlePhotoClick}
                className="absolute bottom-1 right-1 h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Camera className="text-primary-foreground" size={24} />
              </Pressable>
            </View>
            <Text className="mt-4 text-center text-sm text-muted-foreground">
              Toque no ícone da câmera para alterar sua foto
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription>Seus dados cadastrados no sistema.</CardDescription>
          </CardHeader>
          <CardContent>
            <View className="flex-row items-center p-4">
              <User className="h-6 w-6 text-primary" />
              <View className="ml-4">
                <Text className="text-sm text-muted-foreground">Nome Completo</Text>
                <Text className="text-base font-semibold text-foreground">{mockStudent.name}</Text>
              </View>
            </View>

            <Separator />

            <View className="flex-row items-center p-4">
              <Hash className="h-6 w-6 text-primary" />
              <View className="ml-4">
                <Text className="text-sm text-muted-foreground">RA (Registro Acadêmico)</Text>
                <Text className="text-base font-semibold text-foreground">{mockStudent.ra}</Text>
              </View>
            </View>

            <Separator />

            <View className="flex-row items-center p-4">
              <Mail className="h-6 w-6 text-primary" />
              <View className="ml-4">
                <Text className="text-sm text-muted-foreground">Email Institucional</Text>
                <Text className="text-base font-semibold text-foreground">{mockStudent.email}</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progresso do Curso</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="mb-2 flex-row items-center justify-between">
              <Text className="text-sm font-medium text-foreground">Conclusão do Curso</Text>
              <Text className="text-2xl font-bold text-primary">{mockStudent.courseProgress}%</Text>
            </View>
            <Progress value={mockStudent.courseProgress} className="h-4" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resumo Acadêmico</CardTitle>
          </CardHeader>
          <CardContent className="gap-3 space-y-4">
            <View className="rounded-lg bg-muted p-4">
              <Text className="mb-1 text-sm text-muted-foreground">Disciplinas Cursando</Text>
              <Text className="text-3xl font-bold text-foreground">
                {mockStudent.subjects.length}
              </Text>
            </View>
            <View className="rounded-lg bg-muted p-4">
              <Text className="mb-1 text-sm text-muted-foreground">Média Geral</Text>
              <Text className="text-3xl font-bold text-foreground">{averageGrade}</Text>
            </View>
            <View className="rounded-lg bg-muted p-4">
              <Text className="mb-1 text-sm text-muted-foreground">Taxa de Presença</Text>
              <Text className="text-3xl font-bold text-foreground">{attendanceRate}%</Text>
            </View>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
