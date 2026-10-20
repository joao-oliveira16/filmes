
 import { StyleSheet } from "react-native";
 
 const styles = StyleSheet.create({

 containerImagem:{
        width: "100%",
        height: 300,
        borderRadius: 18,
        backgroundColor: "#20243a"
  },
 

  containerDetalhes:{
    flex: 1,
    padding: 5,
   backgroundColor: "#20243a"
  },

  titulo:{
            color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
  },

  nota:{
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "right",
    fontWeight: "bold",
    padding: 5
  },

    tituloSinopse: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12
    },

    sinopse: {
        color: "#d1d5e0",
        fontSize: 16,
        lineHeight: 25,
        textAlign: "justify"
    }



});
  
export default styles;