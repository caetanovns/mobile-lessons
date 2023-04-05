# Prova AVP1

## Disciplina: Desenvolvimento para dispositivos móveis

### Contexto do aplicativo

O Objetivo do teste é reconstruir o aplicativo de contatos. Este é um aplicativo que mostra uma lista do contato dos seus melhores amigos, onde a única interação nele será de selecionar algum amigo, e assim efetuar uma ligação. Durante a ligação, você pode não estar a fim de escutar o que seu amigo tem para falar, então pode **parar** a ligação, como também se necessário poderá **desligar seu microfone**, ou até mesmo deixar a chamada em **viva-voz**, caso queria manter o telefone em um lugar mais distante. Por fim, quando quiser poderá **desligar** a chamada e assim voltar para a listagem dos seus melhores amigos.

### Antes de Iniciar

- Utilize este repositório para inicar sua aplicação, pois nele já foi incluido as bibliotecas necessárias para a execução do APP.
- Na pasta `src/mocks` é dispobilizado um arquivo, onde contém um `vetor` de elementos. Cada elemento na lista deverá deverá representar um item que você poderá efetuar uma chamada. Você tem o direito de alterar o arquivo, porém para o teste este arquivo não necessita de nenhum adaptação ou mudança.
- Na pasta `assets` contém as imagens que são utilizadas pelo `src/mocks`. Esta pasta também não necessita de nenhuma alteração
- A fim de orientar o desenvolvimento dos layouts do APP, você pode acessar o [link do figma](https://www.figma.com/file/MJHj1mVDt1TrQOISnaxcRs/Exemplo?node-id=0-1&t=UmI4Y83dva2Js1eg-0), onde mostra com detalhes cada elemento utilizado.

- Você é livre para criar qualquer diretório ou arquivos que julgar necessário dentra a pasta `src`

### Requisitos da aplicação

- O Layout da sua aplicação deverá seguir o modelo do figma, como já citado acima. Construa seu app da maneira mais fidedigna em relação ao protótipo.

- Para a listagem dos elementos na tela você precisa utilizar o componente `FlatList`

- Quando o usuário selecionar algum item, o mesmo deverá levar para a tela de ligaçã, onde deverá apresentar as seguintes informações: Foto, Nome e Telefone.

- Na tela de ligação, o usuário poderá interagir com os botões de Microfone, Pausar Ligação, Viva Voz e Encerrar a chamada.
  - O botão de encerrar a chamada deverá redirecionar o usuário para a tela principal, onde são listados seus amigos.
  - Os demais botões não deverão realizar nenhuma função real, no entando, quando o usuário o pressionar, será apenas realizada uma troca do ícone.
  - Em relação ao icones da tela de chamada estão armazenados na pasta `assets/icons`. Os icones que precisam de trocados estão nomeados de **[ICONE]_selected**
  - Ex.: `phone_mic.png` corresponede ao `phone_mic_selected.png`, logo quando o usuário clicar no ícone de `phone_mic` o mesmo deverá se trocado pelo `phone_mic_selected.png`, e assim vice versa. A mesma lógica deverá ser aplicado para os outros ícones.

### Observações gerais

- É obrigatório seguir o modelo do figma, no entanto pequenas diferenças como margem, espaçamento, cores, tamanhos poderão ser aceitáveis. A depender da distorção do modelo proposto pelo figma.
- Para a realização do teste é livre a consulta do material de sala ou até mesmo do uso de internet, porém é **ESTRITAMENTE PROIBIDO A COMUNICAÇÃO, BEM COMO O COMPARTILHAMENTO DE CÓDIGO ENTRE OS ALUNOS OU COM PESSOAS EXTERNAS**. Caso aconteça o teste não terá validade.
- A sua nota será atribuida de acordo com o cumprimento dos requisitos, onde 10 corresponde a todos os requisitos. O não cumprimento ou falha de algum requisito não será pontuado.

## Envio do Teste

- Faça um print de tela de cada tela da sua aplicação em execução de renomeira para `tela_1` e `tela_2`. **INCLUA ESSES DOIS ARQUIVOS DENTRO DO SEU PROJETO**
- Para enviar o teste basta apenas compactar (zip) o seu projeto e enviar no portal acadêmico. **LEMBRE-SE, ANTES DE COMPACTAR REMOVA A PASTA `NODE_MODULES`.**

Boa Sorte!
