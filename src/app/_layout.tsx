import { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'react-native';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';
import { AuthProvider, useAuth } from '../context/auth';
import { generateClient } from 'aws-amplify/api';

Amplify.configure(amplifyconfig);
const client = generateClient();

function RootLayoutNav() {
  const { isLoaded, user } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (user && inAuthGroup) {
      // Redirect authenticated users to the home page if they're on an auth page
      router.replace('/(tabs)');
    } else if (!user && !inAuthGroup) {
      // Redirect unauthenticated users to the login page
      router.replace('/(auth)/login');
    }
  }, [user, segments, isLoaded]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Slot />
    </>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}