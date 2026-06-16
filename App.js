import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/componentes/Header';
import Search from './src/componentes/Search';

export default function App() {
  return (
    <View style={styles.container}>

      {/*INICIO DA HEADER*/}
      <Header></Header>
    
    {/*INICIO DA BARRA DE PESQUISA*/}
      <Search></Search>

          {/* Inicio do banner */}
    
    <Text style={styles.textBanner}> Em cartaz </Text>

    <Image source={require('./assets/neymar.jpg')} style={styles.imageBanner}/>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  
  
  imageBanner:{
    width: "60%",
    height: "90%",
    marginTop: 15,
    borderRadius: 20,
   
  },
  textBanner: {
    color: 'white',
    width: '90%',
    fontSize: 30,
    marginTop:20,
    fontWeight:'bold',
  }
});