import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>

      <Text style={styles.atv1}>Atividade 1</Text>

      <View style={styles.vermelho} />
      <View style={styles.verde} />
      <View style={styles.azul} />

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Clique aqui</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  atv1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  vermelho: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  verde: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  azul: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});