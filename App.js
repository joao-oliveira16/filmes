
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, FlatList} from 'react-native';

import Header from './src/componentes/Header'
import Search from './src/componentes/Search'
import Banner from './src/componentes/Banner'
import CardMovies from './src/componentes/CardMovies'
import movies from './moveis'


export default function App() {
  return (
    <View style={styles.container}>

      {/*INICIO DA HEADER*/}
      <Header></Header>
    
    {/*INICIO DA BARRA DE PESQUISA*/}
      <Search></Search>

      <Banner></Banner>

       <CardMovies></CardMovies>


      <View style ={{width:'90%'}}>

  <FlatList
 showsVerticalScrollIndicator= {false}
  horizontal={true}
  data={movies}
  keyExtractor={(item)=> item.id}
  renderItem={({item}) => (

  <CardMovies
    titulo = {item.nome }
    imagem = {item.imagem}
    nota = {item.nota}
  
  />

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
  
 
