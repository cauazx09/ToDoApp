import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo</Text>
      <View style={styles.vermelho}></View>
      <View style={styles.verde}></View>
      <View style={styles.azul}></View>

    </View>

  );
}

const styles = StyleSheet.create({
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

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
  },
});
