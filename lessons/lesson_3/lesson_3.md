# Implementação da Flat List

- Exercício para construção da tela de auth e login do instagram
- Construção da tela de feed, com apenas o componente de stories
- ScrollView, Flatlist e condicional do componente
- Mocks

## 1. Flatlist

- O componente Flatlist permite a iteração de uma lista de itens, através dele é possível renderizar na tela lista de maneira muito simples.
- No parâmetro `data` passamos a lista de itens que serão rendizadados
- No parâmetro `renderItem` definimos o item que será renderizado na tela. Nesse caso podemos implementar nosso próprio componente.
- A variável `item` é disponibilizado pelo próprio componente

```js
 <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={profile_mock}
    renderItem={({ item }) => <StorieItem name={item.name} photo={item.photo} has_storie={item.has_storie} />}
    />
```
