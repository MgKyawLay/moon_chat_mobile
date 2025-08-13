import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { color } from '../../utils/color';
import { supabase } from '../../lib/supabase';
import { MessageMultiColorIcon } from '../../icons';
import { Button, TextButton } from '../../component';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  const signUpWithEmail = async () => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    if (!session) Alert.alert('Please check your mail inbox for varification');
    setLoading(false);
  };

  const handleCreateAccount = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <MessageMultiColorIcon
            width={100}
            height={100}
            color={color.primary}
          />
          <Text style={styles.logoText}>Welcome to Moon Chat</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={color.gray}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={color.gray}
            secureTextEntry
          />
          <Button style={styles.button} title="Login" />
          <Button
            style={styles.secondaryButton}
            title="Create New Account"
            textStyle={styles.secondaryButtonText}
            onPress={handleCreateAccount}
          />
          <TextButton text="Forgot password?" />
        </View>
        {/* <View style={[styles.verticallySpaced, styles.mt20]}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={'none'}
            style={{ borderWidth: 1, borderColor: 'black' }}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={'none'}
            style={{ borderWidth: 1, borderColor: 'black' }}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title="Sign in"
            disabled={loading}
            onPress={() => signInWithEmail()}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Button
            title="Sign up"
            disabled={loading}
            onPress={() => signUpWithEmail()}
          />
        </View> */}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.background,
  },
  container: {
    flex: 1,
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: color.gray,
    color: color.black,
  },
  body: {
    gap: 20,
    marginTop: 32,
  },
  button: {
    alignSelf: 'auto',
  },
  secondaryButton: {
    alignSelf: 'auto',
    backgroundColor: '#b3bfff',
  },
  secondaryButtonText: {
    color: color.black,
  },
});
