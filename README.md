<h1 align="center">
  nextjs-chakra-starter
</h1>
<p align="center">
  Repositório do "nextjs-chakra-starter", um starter kit bastante simples para projetos pessoais com NextJS e Chakra UI
</p>
<p align="center">
  Feito com <a href="https://pt-br.reactjs.org/" target="_blank">React</a>, <a href="https://nextjs.org/" target="_blank">Next.js</a> e <a href="https://chakra-ui.com/" target="_blank">Chakra UI</a>
</p>

## ⚙️ Instalação
1.  **Instalação Local**

    ```shell
    yarn install
    ```

3.  **Desenvolvendo**

    ```shell
    yarn dev
    ```

4.  **Rodando o app**

    O app estará rodando no endereço http://localhost:3000

## 📖 Como usar
- O primeiro passo é seguir a documentação do <a href="https://nextjs.org/docs/getting-started" target="_blank">Next.js</a> e do <a href="https://chakra-ui.com/docs/getting-started" target="_blank">Chakra UI</a>
- Para cada página, use sempre o componente `Page` como wrapper. Ele já vai trazer algumas preparações para o título da página, container, espaçamento entre a `NavBar`, etc. Você pode incrementar o título da página com a props de `title` e personalizar o container com qualquer outra props extra.
- Os componentes `Menu`, `Logo` e até mesmo a `NavBar` estão bem estáticos. O conteúdo deles é alterado diretamente no código, basta adaptar para seu projeto
- Você pode usar alguns customs hooks: `useScroll` e `useResponsiviness`. Eles são bastante simples, apenas algumas informações sobre o scroll da página (se já foi feito ou onde está) e outras informações sobre a responsividade da página (se é uma página mobile por exemplo).
- Você pode incluir ou usar novas fontes alterando apenas o arquivo `src/theme/fonts.js`: as fontes serão baixadas automaticamente.
