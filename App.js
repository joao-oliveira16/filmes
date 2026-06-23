
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/componentes/Header';
import Search from './src/componentes/Search';
import Banner from './src/componentes/banner';
import movies from './moveis.js'


export default function App() {
  return (
    <View style={styles.container}>

      {/*INICIO DA HEADER*/}
      <Header></Header>
    
    {/*INICIO DA BARRA DE PESQUISA*/}
      <Search></Search>

          {/* Inicio do banner */}
      <Banner></Banner>

      <View style ={{width:'90%'}}>

  <Flatlist

  horizontal={true}
  data={movies}
  keyExtractor={(item)=> item.id}
  renderItem={([item]) => (

<TouchableOpacity>

<image style ={{ width:80, height: 100}}source={{uri: item.imagem}}></image>
<Text>{item.nome}</Text>

</TouchableOpacity>

)}


    />


</View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  
  
 
});