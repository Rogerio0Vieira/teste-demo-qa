Feature: Gerenciamento de Registros em Web Tables

  Scenario: Adicionar, editar e deletar um registro com sucesso
    Given que eu esteja na página de Web Tables
    When eu adiciono um novo registro com dados aleatórios
    And eu edito o registro recém-criado com novos dados
    Then eu deleto o registro editado com sucesso
