describe('Покупка нового аватара', function () {

    it('e2e тест на покупку нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('#k_email').type('USER_LOGIN'); // Вводим верный логин
         cy.get('#k_password').type('USER_PASSWORD'); // Вводим верный пароль
         cy.get('.MuiButton-root').click(); // Нажимаем кнопку "Войти"

         cy.wait(1000)

         cy.get('.header_card_trainer').click(); // Переходим во вкладку тренера
         cy.get('[data-qa="shop"]').click(); // Переходим во вкладку "Смена аватара"

         cy.wait(1000)

         cy.get('.available > button').first() .click(); // Нажимаем кнопку "Купить"
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('vodnev.eg@yandex.ru2222 2222 2222 2222 2'); // Вводим номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // Вводим дату
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Вводим cvc
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('asd'); // Вводим имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click() // Нажимаем "Оплатить"
         
         cy.wait(1000)

         cy.get('.style_1_base_input').type('56456'); // Вводим код из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click() // Нажимаем кнопку "Оплатить"

         cy.wait(2000)

         cy.contains('Покупка прошла успешно').should('be.visible'); // Проверяем что текст об успешнйо покупке виден пользователю
         cy.get('.style_1_base_link_blue').click(); // Нажимаем кнопку "Верунться в магазин"
     })
 }) 