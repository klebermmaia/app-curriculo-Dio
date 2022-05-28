import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './components/card'; // como o diretorio já tem um aquivo index não precisa por o aquivo no final, pois já procurar por um index por padrão.

const bg = '#f3f2ef';
const colorIcon = '#07060e';
const colorText = '#222222';
const colorDev = '#414141';
const fotoPerfil = 'https://avatars.githubusercontent.com/u/42123079?v=4';
const App = () => {
  function handleRedeSocial(icons) {
    switch (icons) {
      case 'github':
        Alert.alert('https://github.com/klebermmaia');
        break;
      case 'facebook':
        Alert.alert('https://www.facebook.com/kleber.maia.31');
        break;
      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/kleber-maia-898808162/');
        break;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#000'} />
      <ScrollView>
        <View style={[styles.cabecalho]}>
          <Image source={{uri: fotoPerfil}} style={styles.perfil} />
          <Text style={styles.nome}>Kleber Maia</Text>
          <Text style={styles.dev}>Desenvolvedor Mobile</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon style={styles.icon} name="github" size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon style={styles.icon} name="facebook" size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon style={styles.icon} name="linkedin" size={28} />
            </TouchableOpacity>
          </View>
          <Card titulo="Cursos">
            <Text style={styles.cardText}>UI Design para Iniciantes</Text>
            <Text style={styles.cardText}>HTML e CSS para Iniciantes</Text>
            <Text style={styles.cardText}>JavaScript Completo ES6+</Text>
            <Text style={styles.cardText}>Bootstrap</Text>
          </Card>
          <Card titulo="Habilidades">
            <Text style={styles.cardText}>HTML</Text>
            <Text style={styles.cardText}>CSS</Text>
            <Text style={styles.cardText}>JS</Text>
            <Text style={styles.cardText}>REACT NATIVE</Text>
            <Text style={styles.cardText}>JAVA</Text>
            <Text style={styles.cardText}>Bootstrap</Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardText: {
    fontSize: 16,
    color: colorText,
    marginBottom: 5,
  },
  icon: {
    color: colorIcon,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    marginBottom: 20,
  },
  dev: {
    fontSize: 18,
    fontWeight: '500',
    color: colorDev,
    marginBottom: 10,
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  perfil: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: '#bcbcbc',
    marginBottom: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: bg,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default App;
