import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [temaEscuro, setTemaEscuro] = useState(false);

  // Só recalcula quando "contador" mudar
  const numeroDobrado = useMemo(() => {
    console.log('Calculando...');
    return contador * 2;
  }, [contador]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: temaEscuro ? '#222' : '#fff' },
      ]}
    >
      <Text
        style={{
          color: temaEscuro ? '#fff' : '#000',
          fontSize: 22,
        }}
      >
        Contador: {contador}
      </Text>

      <Text
        style={{
          color: temaEscuro ? '#fff' : '#000',
          fontSize: 22,
          marginBottom: 20,
        }}
      >
        Dobrado: {numeroDobrado}
      </Text>

      <Button
        title="Incrementar"
        onPress={() => setContador(contador + 1)}
      />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Trocar tema"
          onPress={() => setTemaEscuro(!temaEscuro)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
