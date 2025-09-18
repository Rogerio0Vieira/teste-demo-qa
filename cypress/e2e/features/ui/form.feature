Feature: Envio do formulário Practice Form

  Scenario: Usuário preenche e envia o formulário com sucesso
    Given que eu esteja no formulário Practice Form
    When eu preencho o formulário com dados aleatórios
    And eu submeto o formulário
    Then um popup de confirmação deve aparecer
    And eu fecho o popup
