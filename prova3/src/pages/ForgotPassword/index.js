import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

import React, { useState } from 'react';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Verificar se o campo de email está preenchido
    if (email === '') {
      alert('Por favor, informe o seu email!');
      return;
    }

    // Lógica para redefinir a senha no backend
    // ...

    // Exemplo de requisição bem-sucedida
    alert('Enviamos um email de redefinição de senha para o seu endereço de email!');
    // Lógica de navegação para a página de login ou outra tela
    // ...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci Minha Senha</Text>
      <Text style={styles.subtitle}>Informe o seu email para redefinir a senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Enviar" onPress={handleForgotPassword} />
      <Link to={{screen: "LoginPage"}}>Login</Link>
      <Link to={{screen: "DashBoard"}}>DashBoard</Link>
      <Link to={{screen: "RegisterPage"}}>Registrar</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ForgotPassword;
