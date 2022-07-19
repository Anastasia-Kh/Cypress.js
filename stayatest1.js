describe('Тестирование staya', function () {
    
    it('Авторизация', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('валидный@email');
        cy.get('.auth-form > form > [type="password"]').type('валидный пароль');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
                })
})
