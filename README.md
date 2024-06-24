# Módulo 3 de NodeJS Rocket-Seat

Esse módulo possui a estruturação do projeto GymPass app utilizando NodeJS, Solid, design patterns e testes automatizados!

___
### Palavras chave:
>NodeJS, Fastify, Typescript, Eslint, Prisma ORM, PosgreSQL, Docker, SOLID, Hash de senha, Repository Pattern, Vitest, In-Memory Test Database Pattern (Martin Fowler), Factory Pattern, TTD - Test Driven Development, Casos de Uso, JWT (Jason Web Token), Test Environment with Vitest, Schemas in Databases (ambientes isolados dentro dos DBs), Refresh Token, Role Based Access Control (RBAC), Continuous Integration (CI) 

## Conteúdo Programático do Módulo 3:

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">1. Estrutura do projeto</strong></summary>

  ---

  + Introdução
  + Definindo requisitos e regras
  + Criando projeto Node.js
  + Usando versões exatas do NPM
  + Carregando variáveis ambiente
  + Configurando ESLint
  + Criando aliases de importação

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">2. Integração com Prisma ORM</strong></summary>

  ---

  + Fundamentos do Prisma ORM
  + Fundamentos do Docker
  + PostgreSQL com Docker
  + Utilizando o Docker Compose
  + Criando schema do Prisma
  + Relacionamentos entre tabelas

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">3. Caso de uso e design patterns</strong></summary>

  ---

  + Criação de um usuário
  + Hash da senha e validação
  + Caso de uso de registro
  + Repository Pattern
  + Inversão de dependências
  + Interface do repositório
  + Lidando com erros do use case
  + Handler de erros global

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">4. Design Patterns & Testes</strong></summary>

  ---

  + Configurando Vitest
  + Primeiro teste unitário
  + In-Memory Databases
  + Gerando coverage de testes
  + Utilizando UI do Vitest

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">5. Implementando casos de uso</strong></summary>

  ---

  + Caso de uso de autenticação
  + Testes e controller de autenticação
  + Refatorando instâncias nos testes
  + Utilizando Factory Pattern
  + Caso de uso de perfil
  + Caso de uso de check-in
  + TDD & Mocking
  + Validando data do check-in
  + Validando distância do check-in
  + Caso de uso de criação de academia
  + Caso de uso de histórico
  + Caso de uso de métricas
  + Caso de uso de busca de academias
  + Caso de uso de academias próximas
  + Caso de uso de validar de check-in
  + Validando horário do check-in

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">6. Controllers & Testes E2E</strong></summary>

  ---

  + Repositórios do Prisma
  + Repositório de academias
  + Factories dos casos de uso
  + Princípios de autenticação JWT
  + Implementando JWT no Fastify
  + Controller de perIl
  + Criando test environment
  + Organizando NPM scripts
  + Test Environment do Prisma
  + Teste E2E do registro
  + Teste E2E da autenticação
  + Teste E2E do perfil
  + Controller de criação de academia
  + Outros controllers da academia
  + Controllers das rotas de check-ins
  + Testes E2E de rotas de academia
  + Testes E2E de rotas de check-ins

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">7. Refresh Token & RBAC</strong></summary>

  ---

  + Estratégia de refresh de token
  + Implementação do refresh token
  + Autorização por cargos (RBAC)
  + Testes de RBAC

  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">8. CI/CD da aplicação</strong></summary>

  ---

  + Executando testes unitários no CI
  + Executando teste E2E no CI

  ---
</details>

## Acompanhamento do Projeto:

### Requisitos Funcionais:

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

### Regras de Negócio:

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### Requisitos Não Funcionais:

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

## Principais comandos:

### Aula "Criando Projeto NodeJS"

+ `npm init -y` : cria o package.json para iniciar o projeto NodeJS.
+ `npm i typescript @types/node tsx tsup -D` : instala o typescrit, o types/node e o tsx, responsável por converter .ts para .js. O tsup é a biblioteca que cria a versão de build.
+ `npx tsc --init`: executa o arquivo binário tsc dentro de ./node_modules/.bin/ para criar o arquivo tsconfig.json.
  > **_OBS1:_**  Mudar "target" para "es2020" dentro do tsconfig.json.

  > **_OBS2:_**  No tsconfig.json é possível configurar uma baseUrl e os paths para criar atalhos que facilitam a escrita dos caminhos ma importação de arquivos.
+ `npm i fastify` : instala o microframework fastify (semelhante ao express) para fazer requisições http.
+ Scripts criados: 
  ```
    "scripts": {
      "start:dev": "tsx watch src/server.ts",
      "start": "node build/server.js",
      "build": "tsup src --out-dir build"
    },
  ```

### Aula "Carregando variáveis ambiente"

+ `npm i dotenv` : permite que o node entenda o arquivo .env na pasta raíz do projeto. Esse arquivo permite configurar diferentes ambientes: desenvolvimento, produção, teste, etc.
  > **_OBS:_**  Instalar extensão DotENV do VSCode.
+ `npm i zod` : biblioteca para validação de dados dentro do projeto. Auxilia na configuração do ".env".

### Aula "Configurando ESLint"

+ `npm i eslint -D` : Instala o ESLint.
+ `npm i eslint @rocketseat/eslint-config -D` : Instala as configurações da RocketSeat para o ESLint.
+ `npx eslint --init` : Permite configurar o ESLint para personalizar o projeto. 
  > **_OBS:_**  Acrescentar no settings.json do VSCode o seguinte código:
  ```
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
  ```

### Aula "Fundamentos do Prisma ORM"

+ `npm i prisma -D` : Instala o ORM prisma.
  > **_OBS:_**  ORM (Object Relational Mapper) é uma ferramenta que permite mapear as tabelas do banco de dados na forma de objetos. O Prisma possui uma vantagem em relação ao Knex porque diminui o retrabalho de configurar as tabelas no código e no banco de dados. Ele também cria as migrations de forma automática.
+ `npx prisma -h` : Permite ver os comandos que podem ser executados com o prisma
+ `npx prisma init` : inicializa a parte de banco de dados dentro do projeto
  > **_OBS1:_**  Instale e extensão do Prisma dentro do VSCode

  > **_OBS2:_**  Acrescente dentro do settings.json do VSCode o seguinte código:
  ```
    "[prisma]": {
      "editor.formatOnSave": true
    }
  ```
+ `npx prisma generate` : cria de forma automatizada a tipagem do schema, ou seja, permite que o typescript entenda cada tabela e quais as colunas delas.
+ `npm i @prisma/client` : Dependência de produção que acessa de fato o banco de dados.

### Aula "Fundamentos do Docker"
  > **_OBS1:_** O docker permite criar uma instância com os arquivos de um banco de dados, arquivos de configuração, etc. Dessa forma quando queremos deletar essa instância não fica nenhum resquício para trás.

  > **_OBS2:_**  Em comparação à virtualização de sistemas operacionais, o docker leva vantagem e é mais rápido porque evita que o sistema opercional seja virtualizado para cada instância, pois ele pode ser reaproveitado.
+ Desinstalar versões antigas do docker:
  ```
    sudo dnf remove docker \
                      docker-client \
                      docker-client-latest \
                      docker-common \
                      docker-latest \
                      docker-latest-logrotate \
                      docker-logrotate \
                      docker-selinux \
                      docker-engine-selinux \
                      docker-engine
  ```
+ Links importantes para a instalação do docker no Fedora
  >[Possíveis erros de instalação](https://docs.docker.com/engine/install/fedora/)

  >[Login no Docker Desktop](https://docs.docker.com/desktop/get-started/#credentials-management-for-linux-users)

  >Permissão do usuário local ao docker: [Comando único simplificado (final da página)](https://developer.fedoraproject.org/tools/docker/docker-installation.html) ou então [Procedimento passo a passo da documentação do Docker](https://docs.docker.com/engine/install/linux-postinstall/)

### Aula "PostgreSQL com Docker"
+ Cria e inicia o container postgresql usando a image da bitnami. Habilita a porta 5432 do sistema operacional para receber o mesmo que a porta 5432 do docker.
  ```
    docker run --name api-solid-pg
      -e POSTGRESQL_USERNAME=docker
      -e POSTGRESQL_PASSWORD=docker
      -e POSTGRESQL_DATABASE=apisolid
      -p 5432:5432 
      bitnami/postgresql
  ```
  > **_OBS1:_** O bitnami/postgresql é uma imagem do docker que pode ser encontrada no [Docker Hub](https://hub.docker.com/r/bitnami/postgresql)

  > **_OBS2_** É necessário fazer uma configuração adicional no .env adicionado `DATABASE_URL="postgresql://docker:docker@localhost:5432/apisolid?schema=public"`
+ `docker ps` : Lista todos os containers em execução.
+ `docker ps -a` : Lista todos os container já criados.
+ `docker start [nome ou id do container]` : Inicia o container.
+ `docker stop [nome ou id do container]` : Para o container.
+ `docker rm [nome ou id do container]` : Remove o container.
+ `docker logs [nome ou id do container]` : Mostra os logs do banco de dados rodando
  > **_OBS:_** Com o -f mantém o terminal rodando mostrando os novos logs

+ `npx prisma migrate dev` : Detecta as alterações no banco e gera o migrate.
  > **_OBS:_** O container docker precisa estar rodando
+ `npx prisma studio` : Abre no navegador uma interface para navegar pela interface do banco de dados.

### Aula "Utilizando o Docker Compose"

+ `docker compose up -d` : Starta todos os containers definidos dentro do docker-compose.yml
  > **_OBS1:_** O -d é o modo detached para não ficar mostrando logs no terminal

  > **_OBS2:_** Instalar a extensão Docker do Vscode ajuda a detectar erros na criação do docker-compose.yml
+ `docker compose stop` : Para todos os containers da aplicação que foram definidos no arquivo docker-compose.yml

+ `docker compose down` : Apaga todos os containers excluindo os bancos de dados da aplicação que foram definidos no arquivo docker-compose.yml

### Aula "Criando schema do Prisma"

+ `npx prisma migrate dev` : Não detecta as novas alterações, apenas roda todas as migrations que já foram criadas.
  > **_OBS:_** Utilizado em produção

### Aula "Hash da senha e validação"

+ `npm i bcryptjs` : Atualmente a biblioteca mais comum no nodejs pra fazer hash de senhas.

+ `npm i -D @types/bcryptjs` : Como essa biblioteca está em javascript é necessário instalar separadamente o @types/bcryptjs.

### Aula "Configurando Vitest"

+ `npm i vitest vite-tsconfig-paths -D` : Instala o vitest que é uma ferramenta para escrever testes.
  > **_OBS1:_** O "vite-tsconfig-paths" é um plugin que permite que o vitest entenda os paths definidos no tsconfig.json, como o uso do "@", por exemplo.

  > **_OBS2:_** Criar o alias `"test": "vitest run"` para rodar os testes do vitest apenas uma vez.

  > **_OBS3:_** Criar o alias `"test:watch": "vitest"` para deixar o terminal rodando os testes do vitest.

### Aula "Gerando covers de test"

+ `"test:coverage": "vitest run --coverage"` : Criar alias no package.json.
  > **_OBS:_** Após criá-lo, execute-o e o terminal irá sugerir a instalação do '@vitest/coverage-c8'

### Aula "Utilizando AI do Vitest"

+ `npm i -D @vitest/ui` : Instala uma UI que permite ver o coverage dos testes pelo navegador
  > **_OBS:_** Criar o alias `"test:ui": "vitest --ui"`

### Aula "Validando data do check-in"

+ `npm i dayjs` : Para lidar com datas no javascript.

### Aula "Princípios da autenticação JWT"

+ [Site Base Decode 64](https://base64decode.org) : Faz encode e decode no formato base 64
+ [StackOverflow Basic Auth](https://pt.stackoverflow.com/questions/254503/o-que-é-basic-auth) : Página no stackoverflow sobre basic auth.
+ [Site JWT.IO](https://jwt.io) : Gera tokens JWT online 

### Aula "Implementando JWT no Fastify"

+ `npm i @fastify/jwt` : Integra o uso de JTW junto ao Fastify
  > **_OBS:_** O JWT é muito utilizado para rotas http, como por exemplo uma aplicação frontend conectando ao backend. Para integrar a aplicação com um software de terceiro normalmente são utilizados outros métodos.

### Aula "Criando test environment"

+ Os Test Environments são uma forma de ganhar performance executando vários testes dentro de um mesmo ambiente e evitando ter que criar, limpar e deletar bancos de dados para cada teste isoladamente. Os testes ficam menos 'isolados', mas podem ser executados num menor tempo.

+ `npm link` : Ao rodar os testes o terminal reclama que não consegue encontrar a dependência 'vitest-environment-test'. Com esse comando o npm cria para esse pacote um repositório de pacotes local na máquina, ou seja, essa configuração só passa na sua tes
  > **<span style="color:red">_OBS:_</span>** Esse comando deve ser executado dentro da pasta `prisma/vitest-environment-prisma` no projeto

+ `npm link vitest-environment-prisma` : Ao rodar esse comando o projeto passa a reconhecer o pacote vitest-environment-prisma. Agora deve ser possível executar os testes normalmente.
  > **<span style="color:red">_OBS:_</span>** Esse comando deve ser executado na pasta principal do projeto.

### Aula "Organizando npm scripts"

+ Os scripts no package.json que possuem o nome no formato `pre + <nome-de-outro-script>` são sempre executados antes do script nomeado. Os scripts com `pos + <nome-de-outro-script>` são sempre executados depois.

+ `npm install -D npm-run-all` : Permite que os scripts no package.json sejam multiplataforma (pra Windows e Linux), mas precisam de uma sintaxe um pouco diferente.
  > **_OBS:_** Segue a lista de como ficaram os scripts.
    ```
    "scripts": {
      "start:dev": "tsx watch src/server.ts",
      "start": "node build/server.js",
      "start:docker": "docker compose up -d",
      "test:create-prisma-environment": "npm link ./prisma/vitest-environment-prisma",
      "test:install-prisma-environment": "npm link vitest-environment-prisma",
      "build": "tsup src --out-dir build",
      "test": "vitest run --dir src/use-cases",
      "test:watch": "vitest --dir src/use-cases",
      "pretest:e2e": "run-s test:create-prisma-environment test:install-prisma-environment",
      "test:e2e": "vitest run --dir src/http",
      "test:coverage": "vitest run --coverage",
      "test:ui": "vitest --ui"
    },
    ```
    > **_OBS:_** Para o script `test:watch`, ao apertar A ele roda todos os testes novamente ao invés de rodar apenas o que sofreu alteração. 

### Aula "Teste E2E do registro"

+ `npm i supertest -D` : Biblioteca mais utilizada para fazer testes com chamada http sem precisar colocar a aplicação no ar.

+ `npm i @types/supertest -D` : Importa os types para a biblioteca supertest, pois ela não é escrita em typescript.

+ `"test:e2e:watch": "vitest --dir src/http"` : Novo script adicionado ao package.json para evitar que os links sejam feitos enquanto estamos rodando os testes e2e

### Aula "Estratégia de refresh de token"

+ `npm i @fastify/cookie` : Biblioteca para trabalhar com cookies no projeto

### Aula "Executando testes unitários no CI"

+ [GitHub Actions MarketPlace](https://github.com/marketplace/actions/setup-node-js-environment) : Página do Action de Setup Node.js environment

### Aula "Executando testes E2E no CI"

+ `gh pr create` : Criando uma pull request através da CLI do github.
