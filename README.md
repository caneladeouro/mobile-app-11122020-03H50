# MOBILE_App_11122020_03H50
## Lição da Etec Doutora Ruth Cardoso

### Requisitos (Os que não estão marcados são opcionais)
- [x] NodeJS >=v12.19.0
- [x] npm >= 6.14.8
- [ ] yarn (Em vez do npm) >= 1.22.5

### Tecnologias usadas
- Angular CLI
- Node JS
- Typescript
- TypeORM (para o banco de dados)
- Axios (Pra possibilitar o acesso da API através do frontend)
- Express
- Cors (Pra possibilitar o acesso da API fora do domínio)
- Sqlite (banco de dados)
- Yup (Para gerencimento de erros)
- Angular Material (Componentes prontos pra uso no frontend)

### Tipos de tecnologias usadas
- ORM
- Promisses
- Models
- Migrations
- Gerenciamento de rotas

## Como usar o Aplicativo
### Backend
1. Abra a pasta do projeto
2. Abra a pasta server
3. Dê ``npm install`` ou ``yarn install``
4. Inicie o projeto com ``npm run start`` ou ``yarn start``
5. Abra o software cliente (Pode ser um navegador como o Google Chrome, ou o Insominia por exemplo)

Modelo da resposta (rota ``/index``)  
``
[
  {
    "id": 1,
    "name": "Matheus",
    "email": "example@gmail.com",
    "password": "senha"
  }
]
``

Modelo da requisição (rota ``/create``)  
``
{
	"nm_user": "Cartulina",
	"nm_email": "example@gmail.com",
	"ds_password": "senha"
}
``

Modelo da resposta (rota ``/show/:id``)  
``
{
  "id": 1,
  "name": "Matheus",
  "email": "example@gmail.com",
  "password": "senha"
}
``
