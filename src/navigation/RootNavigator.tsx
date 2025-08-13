import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import {
  AddContact,
  NewChat,
  NewGroup,
  NewCall,
  PhoneCallScreen,
  LoginScreen,
} from '../screens';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  
  // const isSignIn = session ? true : false;
  const isSignIn = false;

  return (
    <NavigationContainer>
      {!isSignIn ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="NewChat" component={NewChat} />
          <Stack.Screen name="AddContact" component={AddContact} />
          <Stack.Screen name="NewGroup" component={NewGroup} />
          <Stack.Screen name="NewCall" component={NewCall} />
          <Stack.Screen name="PhoneCallScreen" component={PhoneCallScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
