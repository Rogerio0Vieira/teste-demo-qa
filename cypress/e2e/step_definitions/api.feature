Feature: API DemoQA - fluxo de usuário e livros

  Scenario: Criar usuário, autenticar e alugar livros
    Given que eu crie um novo usuário via API
    When eu gere um token de acesso
    And eu verifique se o usuário está autorizado
    And eu liste os livros disponíveis
    And eu alugue dois livros para o usuário
    Then eu devo ver os livros alugados nos detalhes do usuário
