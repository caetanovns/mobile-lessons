# Implementação form login

Nesta aula será realizada a implementação da página de form para login de usuário. Neste momento não é contemplado a lógica de negócio.

## Codificando

Nesta aula será implementada a tela de login do APP. Então será discutido sobre a construção dos componentes, quanto os Layouts

- Para acessar o conteúdo da aula veja os arquivos:
  - [index.js](../instagram-clone/src/pages/login/index.js)
- Durante a discussão o conteúdo será feita uma breve explicação a respeito do layout `flex`.

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
