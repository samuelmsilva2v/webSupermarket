# API Supermercado
![GitHub repo size](https://img.shields.io/github/repo-size/samuelmsilva2v/webSupermarket?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/samuelmsilva2v/webSupermarket?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/samuelmsilva2v/webSupermarket?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/samuelmsilva2v/webSupermarket?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/samuelmsilva2v/webSupermarket?style=for-the-badge)

[🇺🇸 Read in English](#supermarket-api)

🖥️ Front-end desenvolvido em **Angular e Bootstrap** para controle e gerenciamento de produtos de um supermercado, oferecendo uma interface intuitiva para operações de CRUD (Create, Read, Update, Delete), visualização de produtos, edição e exclusão, com design responsivo e interatividade para uma experiência do usuário otimizada.

O sistema garante que as regras de negócio sejam seguidas, como a obrigatoriedade de categorias, prevenção de cadastro duplicado e restrições na exclusão de produtos com estoque.

## Funcionalidades
* Cadastrar novos produtos com os seguintes atributos:
  * Nome
  * Preço
  * Quantidade em estoque
  * Categoria (ex: Bebidas, Hortifruti, Padaria, etc.)

* Listar todos os produtos cadastrados.

* Editar informações de um produto existente.

* Excluir produtos, desde que o estoque seja igual a 0.
  
* Apresentação de um dashboard com gráfico para consulta de produtos cadastrados por categoria.
  
* Criação e autenticação de usuários.

### Regras de negócio
* Não pode cadastrar produtos com o mesmo nome.

* Não pode excluir um produto que tenha estoque maior que 0.

* O preço do produto não pode ser negativo.

* Ao cadastrar ou editar um produto, é obrigatório informar uma categoria.

* Apenas um usuário cadastrado e autenticado pode acessar a API.

* Não pode cadastrar um usuário com um e-mail já utilizado.

* A senha do usuário deve conter letras maiúsculas, minúsculas, números e símbolos, com no mínimo 8 caracteres.

## Tecnologias Utilizadas
#### Back-end:
* Java 21
* Spring Boot
* Spring Data JPA
* Spring Security
* JWT
* SHA256 (para criptografia de senhas)
* Hibernate
* PostgreSQL (produtos, categorias e usuários)
* Docker (para virtualização do banco de dados)
* JUnit (para testes unitários)
* Swagger (para documentação)
#### Front-end (Web):
* Angular 19
* Bootstrap
* HttpClient (integração com back-end)
* Angular Highcharts (construção do dashboard)
* Angular Guards (para controle de usuários)

## Endpoints

- #### Produtos
| Método | Endpoint                | Descrição                         |
|--------|-------------------------|-----------------------------------|
| POST   | `/api/produtos`         | Cadastra um novo produto          |
| PUT    | `/api/produtos/{id}`    | Edita os dados de um produto      |
| GET    | `/api/produtos`         | Consulta todos os produtos        |
| GET    | `/api/produtos/{id}`    | Consulta um produto através do ID |
| GET    | `/api/consultar/{nome}` | Consulta produtos através do Nome |
| DELETE | `/api/produtos/{id}`    | Exclui um produto                 |

- #### Categorias
| Método | Endpoint               | Descrição                            |
|--------|------------------------|--------------------------------------|
| POST   | `/api/categorias`      | Cadastra uma nova categoria          |
| PUT    | `/api/categorias/{id}` | Edita os dados de uma categoria      |
| GET    | `/api/categorias`      | Consulta todas as categorias         |
| GET    | `/api/categorias/{id}` | Consulta uma categoria através do ID |
| DELETE | `/api/categorias/{id}` | Exclui uma categoria                 |

- #### Dashboard
| Método | Endpoint                           | Descrição                                     |
|--------|------------------------------------|-----------------------------------------------|
| GET    | `/api/dashboard/produto-categoria` | Consulta quantidade de produtos por categoria |

- #### Usuário / Autenticação
| Método | Endpoint                  | Descrição                                |
|--------|----------------------------|-------------------------------------------|
| POST   | `/api/usuario/criar`      | Cadastra um novo usuário                  |
| POST   | `/api/usuario/autenticar` | Autentica um usuário e retorna um token   |

## Instalação e Configuração

### Pré-requisitos
- Docker e Docker Compose
- Java 21
- Spring Boot
- Angular CLI
- pgAdmin (opcional, para inspecionar o banco PostgreSQL)

**1. Clonar o Repositório do Back-end da Supermarket API**
```bash
 git clone https://github.com/samuelmsilva2v/supermarketAPI.git
 cd supermarketAPI
```

**2. Virtualizar o Banco de Dados da Supermarket API no Docker**
```bash
docker-compose up -d
```

**3. Executar o Back-end da Supermarket API**
```bash
mvn spring-boot:run
```
A Supermarket API — incluindo cadastro, login e autenticação de usuários, que agora fazem parte da própria API — estará disponível em http://localhost:8080/swagger-ui/index.html#/.

Na primeira execução um usuário administrador padrão é criado automaticamente (configurável em `application.properties`, propriedades `app.admin.*`):
- **E-mail:** `admin@supermarket.com`
- **Senha:** `Admin@123`

> Essas são credenciais de desenvolvimento/estudo. Troque-as antes de qualquer uso além de testes locais.

**4. Clonar o Repositório do Front-end**
```bash
 git clone https://github.com/samuelmsilva2v/webSupermarket.git
 cd webSupermarket
```

**5. Instale as dependências do projeto:**
```bash
npm install
```

**6. Executar o front-end:**
```bash
$ ng s -o 
```
Isso irá iniciar o servidor de desenvolvimento na URL http://localhost:4200/. Você pode abrir seu navegador e acessar essa URL para visualizar a aplicação.

### Testes
Para rodar os testes automatizados
```bash
mvn test
```
### Login
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/login.png)
### Cadastro de usuário
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/cadastro-usuario.png)
#### Dashboard Produtos / Categorias
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/dashboard.png)
#### Página de cadastro de produtos
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/cadastro-produto.png)
#### Página de pesquisa e consulta de produtos
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/pesquisa-produto.png)

---

# Supermarket API
[🇧🇷 Leia em Português](#api-supermercado)

🛒 RESTful API developed in Java and Spring Boot for controlling and managing supermarket products, allowing CRUD operations (Create, Read, Update, Delete).

The system ensures that business rules are followed, such as mandatory categories, prevention of duplicate registrations, and restrictions on deleting products with stock.

## Features
* Register new products with the following attributes:
  * Name
  * Price
  * Stock quantity
  * Category (e.g., Beverages, Produce, Bakery, etc.)

* List all registered products.

* Edit information of an existing product.

* Delete products, as long as the stock is equal to 0.
  
* Presentation of a dashboard with a chart for querying registered products by category.

* User creation and authentication.

### Business Rules
* Products with the same name cannot be registered.

* A product cannot be deleted if its stock is greater than 0.

* The product price cannot be negative.

* When registering or editing a product, a category must be provided.

* Only a registered and authenticated user can access the API.

* A user cannot be registered with an e-mail that is already in use.

* The user's password must contain uppercase and lowercase letters, numbers and symbols, with at least 8 characters.

## Technologies Used
### Back-end:
* Java 21
* Spring Boot
* Spring Data JPA
* Spring Security
* JWT
* SHA256 (password encryption)
* Hibernate
* PostgreSQL (products, categories and users)
* Docker (for database virtualization)
* JUnit (for unit testing)
* Swagger (for documentation)
#### Front-end:
* Angular 19
* Bootstrap
* HttpClient (integration with back-end)
* Angular Highcharts (dashboard construction)
* Angular Guards

## Endpoints

- #### Products
| Method | Endpoint                | Description                |
|--------|-------------------------|----------------------------|
| POST   | `/api/produtos`         | Registers a new product    |
| PUT    | `/api/produtos/{id}`    | Edits product data         |
| GET    | `/api/produtos`         | Retrieves all products     |
| GET    | `/api/produtos/{id}`    | Retrieves a product by ID  |
| GET    | `/api/consultar/{nome}` | Retrieves products by name |
| DELETE | `/api/produtos/{id}`    | Deletes a product          |

- #### Categories
| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/api/categorias`      | Registers a new category   |
| PUT    | `/api/categorias/{id}` | Edits category data        |
| GET    | `/api/categorias`      | Retrieves all categories   |
| GET    | `/api/categorias/{id}` | Retrieves a category by ID |
| DELETE | `/api/categorias/{id}` | Deletes a category         |

- #### Dashboard
| Method | Endpoint                           | Description                                |
|--------|------------------------------------|--------------------------------------------|
| GET    | `/api/dashboard/produto-categoria` | Query the quantity of products by category |

- #### User / Authentication
| Method | Endpoint                  | Description                          |
|--------|----------------------------|---------------------------------------|
| POST   | `/api/usuario/criar`      | Registers a new user                  |
| POST   | `/api/usuario/autenticar` | Authenticates a user and returns a token |

## Installation and Configuration

### Prerequisites
- Docker e Docker Compose
- Java 21
- Spring Boot
- Angular CLI
- pgAdmin (optional, for inspecting the PostgreSQL database)

**1. Clone the Back-end Repository for the Supermarket API**
```bash
 git clone https://github.com/samuelmsilva2v/supermarketAPI.git
 cd supermarketAPI
```

**2. Virtualize the Supermarket API Database in Docker**
```bash
docker-compose up -d
```

**3. Run the Back-end of the Supermarket API**
```bash
mvn spring-boot:run
```
The Supermarket API — including user registration, login and authentication, which are now part of the API itself — will be available at http://localhost:8080/swagger-ui/index.html#/.

On the first run, a default admin user is created automatically (configurable in `application.properties`, `app.admin.*` properties):
- **Email:** `admin@supermarket.com`
- **Password:** `Admin@123`

> These are development/study credentials. Change them before any use beyond local testing.

**4. Clone the Front-end Repository**
```bash
git clone https://github.com/samuelmsilva2v/webSupermarket.git
cd webSupermarket
```

**5. Install the project dependencies:**
```bash
npm install
```

**6. Run the front-end:**
```bash
ng s -o
```

This will start the development server at URL http://localhost:4200/. You can open your browser and access this URL to view the application.

### Testing
To run automated tests
```bash
mvn test
```

### Login
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/login.png)
### User Signup
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/cadastro-usuario.png)
#### Dashboard Products / Categories
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/dashboard.png)
#### Product Registration Page
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/cadastro-produto.png)
#### Product Search Page
![](https://github.com/samuelmsilva2v/assets/blob/main/webSupermarket/pesquisa-produto.png)
