import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image  } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>


{/* INICIO DA HEADER*/}
 <View style={styles.viewHeader} >

 <Feather name="menu" size={24} color="white" />

<Text style={styles.textHeader}> TECFILMES</Text>
<TouchableOpacity>
 
</TouchableOpacity>

 </View>
{/* INICIO DA BARRA DE PESQUISA*/}

<View style={styles.containerSearch}>
  <TextInput 
  placeholder='Digite o filme que deseja buscar'
  ></TextInput>



</View>

{/* INICIO DO BANNER*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
  
  },
// HEADER
 viewHeader: {
  flexDirection:'row',
  width: "90%",
  alignItems: 'center',
  marginTop: 10,
  justifyContent: 'space-between',
  

 },
 textHeader: {
 
  fontSize: 25,
  color: 'white',
  fontWeight: 'bold'

 },
 containerSearch: {

  marginTop: 20,
  width: "90%",
  backgroundColor: 'white',
  borderRadius: 5,
  padding : 8

 },

});
