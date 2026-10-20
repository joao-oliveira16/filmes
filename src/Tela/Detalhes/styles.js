import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  content: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  posterContainer: {
    width: '100%',
    maxWidth: 520,
    height: 430,
    alignSelf: 'center',
    position: 'relative',
  },
  poster: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    resizeMode: 'cover',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 24,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setaVoltar: {
    color: '#fff',
    fontSize: 38,
    lineHeight: 42,
    marginTop: -5,
  },
  informacoes: {
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  avaliacao: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  estrelaCheia: {
    color: '#e8ad53',
    fontSize: 21,
    lineHeight: 24,
  },
  estrelaVazia: {
    color: '#e8ad53',
    fontSize: 21,
    lineHeight: 24,
  },
  nota: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
  },
  notaIndisponivel: {
    color: '#cbd5e1',
    fontSize: 15,
  },
  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  tituloSinopse: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  sinopse: {
    color: '#e5e7eb',
    fontSize: 16,
    lineHeight: 23,
  },
});

export default styles;
