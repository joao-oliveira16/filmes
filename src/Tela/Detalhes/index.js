import { useNavigation, useRoute } from '@react-navigation/native';
import Stars from 'react-native-stars';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles.js';

export default function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();
  const { imagem, titulo, nota, sinopse } = route.params ?? {};
  const avaliacao = Number.parseFloat((nota ?? '').replace(',', '.'));
  const temAvaliacao = Number.isFinite(avaliacao);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.posterContainer}>
        <Image source={{ uri: imagem }} style={styles.poster} />
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          onPress={() => navigation.goBack()}
          style={styles.botaoVoltar}
        >
          <Text style={styles.setaVoltar}>‹</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.informacoes}>
        <View style={styles.avaliacao}>
          {temAvaliacao ? (
            <>
              <Stars
                count={10}
                display={avaliacao}
                spacing={0}
                starSize={22}
                fullStar={<Text style={styles.estrelaCheia}>★</Text>}
                emptyStar={<Text style={styles.estrelaVazia}>☆</Text>}
              />
              <Text style={styles.nota}>{nota}/10</Text>
            </>
          ) : (
            <Text style={styles.notaIndisponivel}>Nota não disponível</Text>
          )}
        </View>

        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.tituloSinopse}>Sinopse</Text>
        <Text style={styles.sinopse}>{sinopse}</Text>
      </View>
    </ScrollView>
  );
}