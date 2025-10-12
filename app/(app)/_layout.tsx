import { Drawer } from 'expo-router/drawer';
import { useColorScheme } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { Home, FileText, Calendar, BookOpen, UserCircle, CheckSquare } from 'lucide-react-native';

export default function AppLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: isDark ? '#3b82f6' : '#2563eb',
          drawerInactiveTintColor: isDark ? '#9ca3af' : '#6b7280',
          headerStyle: {
            backgroundColor: isDark ? '#111827' : '#fff',
          },
          headerTintColor: isDark ? '#fff' : '#000',
        }}
      >
        <Drawer.Screen
          name="dashboard"
          options={{ title: 'Dashboard', drawerIcon: ({ color, size }) => <Home color={color} size={size} /> }}
        />
        <Drawer.Screen
          name="notas"
          options={{ title: 'Notas', drawerIcon: ({ color, size }) => <FileText color={color} size={size} /> }}
        />
        <Drawer.Screen
          name="presenca"
          options={{ title: 'Presença', drawerIcon: ({ color, size }) => <CheckSquare color={color} size={size} /> }}
        />
        <Drawer.Screen
          name="disciplinas"
          options={{ title: 'Disciplinas', drawerIcon: ({ color, size }) => <BookOpen color={color} size={size} /> }}
        />
        <Drawer.Screen
          name="calendario"
          options={{ title: 'Calendário', drawerIcon: ({ color, size }) => <Calendar color={color} size={size} /> }}
        />
        <Drawer.Screen
          name="perfil"
          options={{ 
            title: 'Perfil', 
            drawerIcon: ({ color, size }) => <UserCircle color={color} size={size} />,
            drawerItemStyle: { display: 'none' } 
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}