Feature: Funcionalidade de Novas Janelas do Navegador

  Scenario: Validar a abertura e o conteúdo de uma nova janela
    Given que eu esteja na página de Browser Windows
    When eu clico no botão para abrir uma nova janela
    Then uma nova página deve ser aberta com a mensagem "This is a sample page"
    And eu posso retornar para a página anterior
