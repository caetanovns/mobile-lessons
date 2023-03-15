# Implementação form login

## Flex
- O flex define como itens serão preenchidos no espaço disponível.
- O padrão do `flex` é **0**.
```bash
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={{backgroundColor: 'red'}}>
        <Text>Container  1</Text>
      </View>
      <View style={{backgroundColor: 'green'}}>
        <Text>Container  2</Text>
      </View>
    </SafeAreaView>
  );
}
```
- Agora podemos incluir a propriedade `flex` com valor **1**
- Incluimos a propriedade no `<SafeAreaView>` e `<View>`
- Após isso notamos que os componentes ocupam 50% da tela igualmente
```bash
style={{ flex: 1 }}
```
- Podemos alterar o parâmetro de flex no componente `<View>` e notar as mudanças