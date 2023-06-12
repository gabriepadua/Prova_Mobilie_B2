
import { Link } from '@react-navigation/native';


import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificar se os campos estão preenchidos
    if (username === '' || password === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Lógica para verificar o login e senha no backend
    // ...

    // Exemplo de verificação de login e senha
    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido! Redirecionando para a página principal...');
      // Lógica de navegação para a próxima tela
      // ...
    } else {
      alert('Credenciais inválidas. Por favor, tente novamente!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Link to={{screen: "RegisterPage"}}>Registrar</Link>
      <Link to={{screen: "DashBoard"}}>DashBoard</Link>
      <Link to={{screen: "ForgotPassword"}}>Esqueci minha senha</Link>
      
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


export default LoginPage;
