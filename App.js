
import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, FlatList} from 'react-native';

import Header from './src/componentes/Header'
import Search from './src/componentes/Search'
import Banner from './src/componentes/Banner'
import movies from './moveis'


export default function App() {
  return (
    <View style={styles.container}>

      {/*INICIO DA HEADER*/}
      <Header></Header>
    
    {/*INICIO DA BARRA DE PESQUISA*/}
      <Search></Search>

      <Banner></Banner>

      <View style ={{width:'90%'}}>

  <FlatList
 showsVerticalScrollIndicator= {false}
  horizontal={true}
  data={movies}
  keyExtractor={(item)=> item.id}
  renderItem={({item}) => (

 <TouchableOpacity style={styles.containerFilmes}>

 <Image style={styles.images} source={{ uri: item.imagem}} />
 <Text style ={styles.titulo}>{item.nome} </Text> 
 
<Text style ={styles.textNota}> {item.nota} </Text>

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
  
  containerFilmes:{
 paddingTop:20,
 paddingBottom:16,
 paddingRight:16,
 width:140,
 heigh:28
 },

titulo:{
color: '#fff',
 fontSize:12,
 paddingTop:8 
},

 textNota:{
 fontSize:10,
 color:'#fff',
 paddingLeft:4
 },

 images:{
 width:'100%',
 height:170,
 borderRadius: 8,

 }


});
  
 
