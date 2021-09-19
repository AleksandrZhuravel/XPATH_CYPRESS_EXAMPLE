describe('Cypress Tests', () => {
    it('Xpath test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('01. Открыть главную страницу Yandex')
            cy.visit(data.main_url)

            cy.log('02.Нажать на ссылку геолокации')
            cy.xpath('//span[contains(text(),"Сейчас в СМИ")]')
                .should('have.test', 'Сейчас в СМИ')
        });
    });
});
