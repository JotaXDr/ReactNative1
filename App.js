import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function PerfilUser() {
  // Suponha que você tenha esses dados do usuário
  const user = {
    name: 'Jose',
    bio: 'Olá, mundo.',
    profileImage: require('./assets/img.png') // ou a URL da imagem
  };

  return (
    <View style={styles.container}>
      <Image source={user.profileImage} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PerfilUser;
