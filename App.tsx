import './global.css';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rango — em breve</Text>
      <Text style={styles.counter}>Toques: {count}</Text>

      <Pressable style={styles.button} onPress={() => setCount((atual) => atual + 1)}>
        <Text style={styles.buttonLabel}>Tocar</Text>
      </Pressable>

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
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#d5f3df',
  },
  counter: {
    fontSize: 18,
    color: '#111827',
  },
  button: {
    backgroundColor: '#ea580c',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: '600',
  },
});
