Feature: Ordenação de Elementos

  Scenario: Ordenar uma lista de itens em ordem crescente
    Given que eu esteja na página de Sortable
    When eu ordeno os itens da lista para a ordem crescente
    Then os itens da lista devem estar em ordem crescente
