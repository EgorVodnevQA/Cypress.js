import * as data from "../helpers/default_data.json"

describe('Проверка авторизации', function () {

     beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

     afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
         cy.get('#exitMessageButton > .exitIcon').click(); // Нажимаем на крестик   
           }); 
         

    it('Верный логин и верный пароль', function () {
         cy.get('#mail').type(data.login); // Вводим верный логин
         cy.get('#pass').type(data.password); // Вводим верный пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку Войти

         cy.wait(2000)

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что есть текст авт.
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст авт. виден пользователю
     })

      it('Верный логин и неверный пароль', function () {
         cy.get('#mail').type('german@dolnikov.ru'); // Вводим верный логин
         cy.get('#pass').type('qa_one_love'); // Вводим неверный пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что есть текст авт.
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст авт. виден пользователю
     })

     it('Неверный логин и верный пароль', function () {
         cy.get('#mail').type('germar@dolnikov.ru'); // Вводим неверный логин
         cy.get('#pass').type(data.password); // Вводим верный пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что есть текст авт.
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст авт. виден пользователю
     })

       it('Приведение к строчным буквам в логине', function () {
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // Вводим верный логин
         cy.get('#pass').type(data.password); // Вводим верный пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что есть текст авт.
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст авт. виден пользователю
        
     })

      it('Проверка что в логине есть @', function () {
         cy.get('#mail').type('germandolnikov.ru'); // Вводим логин без @
         cy.get('#pass').type(data.password); // Вводим верный пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку Войти

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю на совпадение текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст авт. виден пользователю
     })

      it('Проверка восстановления пароля', function () {
         cy.get('#forgotEmailButton').click(); // Нажимаем на кнопку "Забыли пароль"

         cy.get('#mailForgot').type(data.login); // Вводим почту для восстановления
         cy.get('#restoreEmailButton').click() // Нажимаем на кнопку "Отправить код"
 

         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователю
     }) 
 }) 



 // План
 // Верный логин и верный пароль
 // Верный логин и неверный пароль
 // Неверный логин и верный пароль
 // Приведение к строчным буквам в логине
 // Проверка что в логине есть @
 // Проверка восстановления пароля