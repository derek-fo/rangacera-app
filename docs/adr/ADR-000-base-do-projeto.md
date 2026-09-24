# ADR-000: Base tecnológica do projeto Rango

## Status
Aceita — 24/09/2026

## Contexto
<!-- O Rango é um aplicativo de delivery que usará mapas, câmeras, notificações, lista de restaurantes e pratos, métodos de pagamentos. A aplicação rodará tanto em android quanto ios

## Opções consideradas
<!-- Descreva em 1 ou 2 frases cada uma:
     1. App híbrido (WebView) - sites rodando dentro de um navegador embutido, texto e botões são html e css
     2. Flutter - o flutter desenha cada pixel com seu motor, ignorando componentes
     3. React Native com Expo - componentes nativos reais do SO, texto é um componente <Text>
     4. Dois apps nativos separados (Swift + Kotlin) --> apps nativos para cada SO. usam linguagens diferentes

## Decisão
React Native

## Consequências
Utilizando o React Native abdicamos de duas equipes desenvolvendo o mesmo aplicativo pois ele usa os componentes nativos para o desenvolvimento e o bundler dele gera para os dois sistemas, android e ios. Adiante no projeto precisaremos migrar para o development build pois adotaremos o MMKV, uso de notificações de push e módulos nativos.
<!-- O que ganhamos com essa escolha? O que perdemos ou teremos
     que administrar? Mencione o plano Expo Go → development build. -->

1 - Fácil: escreva, com suas palavras, um parágrafo explicando a diferença entre Expo Go e development build. O critério de sucesso: uma pessoa que nunca programou deveria entender por que às vezes uma biblioteca funciona no seu celular com um e não com o outro.
R - o expo go possui módulos nativos instalador da expo sdk, quando roda um projeto, o expo go baixa o js e executa o projeto dentro dele. ele depende de outras bibliotecas que não vem inicialmente.
no dev build voce gera um app de desenvolvimento que tem os módulos nativos que voce escolhe pro projeto, é como se voce criasse o proprio expo go.

2 - Médio: liste três bibliotecas que você imagina que um app de delivery como o Rango vai precisar (pense em mapa, armazenamento, notificações, câmera, animações...). Para cada uma, pesquise no React Native Directory ou na documentação do Expo e responda: ela tem código nativo? Funciona no Expo Go ou exige development build?
R - biblioteca de mapas para marcar a localização ou acompanhar o pedido, notificação para avisar usuário sobre pedidos, camera para confirmação de recebimento de pedidos.

3 - Desafio: imagine que o gerente de produto do Rango te pergunta numa reunião: "Por que não fazemos o app em Flutter, ou apenas uma versão web dentro de um app?". Escreva uma resposta de no máximo 10 linhas, com argumentos técnicos e de negócio (tempo de desenvolvimento, contratação de pessoas, experiência do usuário, acesso a recursos do aparelho). Uma boa resposta de sênior reconhece os pontos fortes das alternativas antes de defender a escolha.
R - não usaremos o flutter pois com o react native podemos enxugar a equipe, trabalhando apenas em um código que funcionará para os dois sistemas. com isso ganharemos agilidade no desenvolvimento. o rn também possui seus componentes nativos, não precisando instalar novas bibliotecas e criar uma nova aplicação para rodar o proneto, a não ser que seja necessário.