# Projeto de Testes Automatizados - DemoQA

Este projeto contém testes automatizados para o site [DemoQA](https://demoqa.com), utilizando Cypress com Cucumber para testes de interface (UI) e API.

## 📋 Sobre o Projeto

O projeto implementa testes automatizados para validar funcionalidades do site DemoQA, incluindo:

- **Testes de API**: Criação de usuários, autenticação e gerenciamento de livros
- **Testes de UI**: Formulários, tabelas, barras de progresso, elementos sortáveis e janelas

### Tecnologias Utilizadas

- **Cypress 15.2.0**: Framework de testes end-to-end
- **Cucumber**: BDD (Behavior Driven Development) para cenários em linguagem natural
- **Faker.js**: Geração de dados aleatórios para testes
- **ESBuild**: Compilador JavaScript para otimização

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd teste-demo-qa
```

2. Instale as dependências:
```bash
npm install
```

### Executando os Testes

#### Executar todos os testes
```bash
npx cypress run
```

#### Executar testes em modo interativo
```bash
npx cypress open
```

#### Executar testes específicos

**Testes de API:**
```bash
npx cypress run --spec "cypress/e2e/features/api/**/*.feature"
```

**Testes de UI:**
```bash
npx cypress run --spec "cypress/e2e/features/ui/**/*.feature"
```

**Teste específico (ex: formulário):**
```bash
npx cypress run --spec "cypress/e2e/features/ui/form.feature"
```

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── features/
│   │   ├── api/                    # Testes de API
│   │   │   ├── api.feature         # Cenários de API
│   │   │   └── api.js              # Implementação dos steps
│   │   └── ui/                     # Testes de Interface
│   │       ├── form.feature        # Teste de formulário
│   │       ├── form.js
│   │       ├── progressbar.feature # Teste de barra de progresso
│   │       ├── progressbar.js
│   │       ├── sortable.feature    # Teste de elementos sortáveis
│   │       ├── sortable.js
│   │       ├── webtables.feature   # Teste de tabelas
│   │       ├── webtables.js
│   │       ├── windows.feature     # Teste de janelas
│   │       └── windows.js
│   └── pageobjects/                # Page Object Model
│       ├── FormPage.js
│       ├── ProgressBarPage.js
│       ├── SortablePage.js
│       ├── WebTablesPage.js
│       └── BrowserWindowsPage.js
├── fixtures/                       # Dados de teste
├── screenshots/                    # Screenshots dos testes
└── support/                        # Configurações de suporte
```

## 🧪 Cenários de Teste

### Testes de API
- Criação de usuário via API
- Geração de token de autenticação
- Verificação de autorização
- Listagem de livros disponíveis
- Aluguel de livros para usuário

### Testes de UI
- **Formulário**: Preenchimento e envio com dados aleatórios
- **Tabelas**: Validação de dados em tabelas web
- **Barras de Progresso**: Teste de elementos de progresso
- **Elementos Sortáveis**: Validação de funcionalidade de ordenação
- **Janelas**: Teste de abertura e fechamento de janelas

## ⚙️ Configurações

O projeto está configurado para:
- **Base URL**: https://demoqa.com
- **Padrão de specs**: `cypress/e2e/features/**/*.feature`
- **Preprocessador**: ESBuild com suporte a Cucumber
- **Geração de dados**: Faker.js para dados aleatórios

## 📊 Relatórios

Os testes geram:
- Screenshots em caso de falha (salvos em `cypress/screenshots/`)


## 🔧 Comandos Úteis

```bash
# Limpar cache do Cypress
npx cypress cache clear

# Executar testes em modo headless
npx cypress run --headless

# Executar testes com interface gráfica
npx cypress open


## 📝 Notas Importantes

- Os testes utilizam dados aleatórios gerados pelo Faker.js
- O projeto segue o padrão Page Object Model para melhor organização
- Todos os cenários são escritos em Gherkin (Cucumber)
- Os testes são independentes e podem ser executados em qualquer ordem

## 🤝 Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente os testes necessários
4. Execute os testes para garantir que funcionam
5. Faça um pull request
