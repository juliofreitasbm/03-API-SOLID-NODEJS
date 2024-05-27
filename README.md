# Módulo 3 de NodeJS Rocket-Seat

Esse módulo possui a estruturação do projeto GymPass app utilizando NodeJS, Solid, design patterns e testes automatizados!

___
### Palavras chave:
>NodeJS, Solid, Fastify, Typescript

## Acompanhamento do Projeto:

### Requisitos Funcionais:

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível cadastrar uma academia;

### Regras de Negócio:

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### Requisitos Não Funcionais:

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

## Principais comandos:

### Aula "Criando Projeto NodeJS"

+ `npm init -y` : cria o package.json para iniciar o projeto NodeJS.
+ `npm i typescript @types/node tsx tsup -D` : instala o typescrit, o types/node e o tsx, responsável por converter .ts para .js. O tsup é a biblioteca que cria a versão de build.
+ `npx tsc --init`: executa o arquivo binário tsc dentro de ./node_modules/.bin/ para criar o arquivo tsconfig.json.
  > **_OBS:_**  Mudar "target" para "es2020" dentro do tsconfig.json.
+ `npm i fastify` : instala o microframework fastify (semelhante ao express) para fazer requisições http.
+ Scripts criados: 
  ```
    "scripts": {
      "start:dev": "tsx watch src/server.ts",
      "start": "node build/server.js",
      "build": "tsup src --out-dir build"
    },
  ```