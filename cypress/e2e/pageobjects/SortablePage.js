class SortablePage {
  visit() {
    cy.visit("https://demoqa.com/");
    cy.contains(".card-body", "Interactions").click();
    cy.contains("li", "Sortable").click();
  }

  getListItem(itemText) {
    return cy.get('#demo-tabpane-list .list-group-item').contains(itemText);
  }

  getCurrentListOrder() {
    const texts = [];
    return cy.get('#demo-tabpane-list .list-group-item').each(item => {
      texts.push(item.text());
    }).then(() => texts);
  }

  sortListToAscending() {
    const targetOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    const attemptSort = () => {
      this.getCurrentListOrder().then(currentOrder => {
        if (JSON.stringify(currentOrder) === JSON.stringify(targetOrder)) {
          return;
        }

        let itemToMove;
        let targetPredecessor;
        for (let i = 0; i < targetOrder.length; i++) {
          if (currentOrder[i] !== targetOrder[i]) {
            itemToMove = targetOrder[i];
            targetPredecessor = (i === 0) ? null : targetOrder[i - 1];
            break;
          }
        }

        const sourceElement = this.getListItem(itemToMove);

        if (targetPredecessor) {
          const targetElement = this.getListItem(targetPredecessor);
          sourceElement.trigger('mousedown', { which: 1, force: true });
          targetElement.trigger('mousemove', 'bottom', { force: true });
          cy.get('body').trigger('mouseup', { force: true });
        } else {
          const firstElement = cy.get('#demo-tabpane-list .list-group-item').first();
          sourceElement.trigger('mousedown', { which: 1, force: true });
          firstElement.trigger('mousemove', 'top', { force: true });
          cy.get('body').trigger('mouseup', { force: true });
        }

        cy.wait(500).then(() => {
          attemptSort();
        });
      });
    };

    attemptSort();
  }

  verifyListOrder() {
    const expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
    cy.get('#demo-tabpane-list .list-group-item').each((item, index) => {
      cy.wrap(item).should('have.text', expectedOrder[index]);
    });
  }
}

export default SortablePage;
