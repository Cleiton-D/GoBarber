<h1 align="center">
      <img alt="Logo GoBarber" width="" src="https://raw.githubusercontent.com/Cleiton-D/GoBarber/master/assets/logo.svg" />
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Cleiton-D/GoBarber.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Cleiton-D/GoBarber.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Cleiton-D/GoBarber.svg">
  <a href="https://github.com/Cleiton-D/Desafio-GoStack-MeetApp/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Cleiton-D/GoBarber.svg">
  </a>
</p>

<p align="center">
  <a href="#information_source-como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp;
</p>

![App-Screenshot](https://raw.githubusercontent.com/Cleiton-D/GoBarber/master/assets/web-login.png)
![App-Screenshot](https://raw.githubusercontent.com/Cleiton-D/GoBarber/master/assets/web-dashboard.png)

<div align="center">
<img alt="GitHub last commit" width="200" src="https://raw.githubusercontent.com/Cleiton-D/GoBarber/master/assets/mobile-login.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img alt="GitHub last commit" width="200" src="https://raw.githubusercontent.com/Cleiton-D/GoBarber/master/assets/mobile-success.png">
</div>

## :information_source: Como utilizar

Para executar esta aplicação, você precisará do [Git](https://git-scm.com), [Nodejs v12][nodejs] ou superior e o [Yarn][yarn]. No seu terminal:

### Instalar API

```bash
# Clone este repositório:
$ git clone https://github.com/Cleiton-D/GoBarber

# Vá para o repositório da api:
$ cd GoBarber/api

# Instalar as dependências
$ yarn install

# Iniciar serviços do Docker

# postgres
$ docker run --name gobarber -e POSTGRES_PASSWORD=gobarber -e POSTGRES_DB=gobarber -p 5432:5432 -d postgres

# mongo
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# redis
$ docker run --name redis -p 6379:6379 -d -t redis:alpine
```

Configure um arquivo .env baseando-se no .env.example

#### Inicie a aplicação

```bash
# Executar as migrations
$ yarn typeorm migration:run

# Iniciar a api
$ yarn dev:server
```

### Instalar o GoBarber Web

```bash

# Vá para a pasta front
$ cd GoBarber/web

# Instalar as dependências
$ yarn install

# Iniciar a aplicação
$ yarn start
```

### Instalar o GoBarber Mobile

```bash

# Vá para a pasta mobile
$ cd GoBarber/Mobile

```

```bash
# instale as dependências
$ yarn install

# Inicie o metro server
$ yarn start
```

Em uma nova aba do terminal:

```bash
$ yarn react-native run-ios
```

---

Construido por Cleiton Dione Ahnerth Kiper: [LinkedIn](https://www.linkedin.com/in/cleiton-dione-ahnerth-kiper-4098b4127/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
