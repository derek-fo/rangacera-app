# ADR-000: Base tecnológica do projeto Rangacera

## Status
Aceita — 24/09/2026

## Contexto
O Rangacera é um aplicativo de delivery que usará mapas, câmeras, notificações, lista de restaurantes e pratos, métodos de pagamentos. A aplicação rodará tanto em android quanto ios

## Opções consideradas
     1. App híbrido (WebView) - sites rodando dentro de um navegador embutido, texto e botões são html e css.
     2. Flutter - o flutter desenha cada pixel com seu motor, ignorando componentes.
     3. React Native com Expo - componentes nativos reais do SO, texto é um componente <Text>.
     4. Dois apps nativos separados (Swift + Kotlin) --> apps nativos para cada SO. usam linguagens diferentes.

## Decisão
Usaremos React Native com Expo e TypeScript, porque entrega componentes nativos reais naos dois SO a partir de uma base de código única, dá acesso a recursos do aparelho pelo Expo SDK e permite contratar em um mercado grande de desenvolvedores JavaScript/React.

## Consequências
Utilizando o React Native a necessidade de duas equipes desenvolvendo é dispensada para o desenvolvimento do aplicativo pois ele usa os componentes nativos para os dois SO.
A escolha também apresenta o lado ruim como dependência de bibliotecas de terceiros (que podem ficar desatualizadas ou abandonadas), a necessidade de alguém no time entender um pouco de iOS e Android quando algo nativo quebrar, e depuração que às vezes atravessa várias camadas (JS, Metro, código nativo). 
Adiante no projeto precisaremos migrar para o development build pois adotaremos o MMKV, uso de notificações de push e módulos nativos.