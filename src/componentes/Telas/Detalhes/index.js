import {View,Text,Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './styles';

export default function Detalhes (){

    const route = useRoute();
    return(

        



    <View style={styles.containerDetalhes}>
        <Text style={styles.titulo}> {route.params.titulo}</Text>
       
        
        <Image style = {styles.containerImagem} source={{uri:route.params.imagem}}/>

        <Text style={styles.nota}> {route.params.nota}</Text>
        <Text style={styles.tituloSinopse}> Sinopse </Text>
        <Text style={styles.sinopse}> {route.params.sinopse}</Text>
        
       
    </View>
   

     
    )
}