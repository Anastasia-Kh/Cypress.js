describe('Тестирование staya', function () {
    
    it('Авторизация с неверным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('валидный@email');
        cy.get('.auth-form > form > [type="password"]').type('невалидный пароль');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
                })
})
