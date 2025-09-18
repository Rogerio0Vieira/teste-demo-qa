Feature: Funcionalidade da Barra de Progresso

  Scenario: Iniciar, parar, validar e resetar a barra de progresso
    Given que eu esteja na página de Progress Bar
    When eu inicio a barra de progresso
    Then eu a paro antes de 25%
    Then o valor da barra de progresso deve ser menor ou igual a 25%
    When eu continuo a barra de progresso até 100%
    Then eu a reseto
    Then o valor da barra de progresso deve retornar a 0%
