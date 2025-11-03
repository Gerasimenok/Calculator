# Проект "Калькулятор"

Веб-калькулятор с поддержкой базовых арифметических операций, реализованный на чистом JavaScript.

## Задача

Данный проект реализует простой веб-калькулятор, поддерживающий базовые арифметические операции: сложение, вычитание, умножение, деление, процент и смену знака числа.  
[Ссылка на ТЗ](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## Как запустить приложение

1. Клонируйте репозиторий или скачайте ZIP-архив:

git clone https://github.com/Gerasimenok/Calculator.git

cd Calculator

2. Установите зависимости:
   npm install

3. Запустите проект в режиме разработки:
   npm start

Приложение откроется по адресу http://localhost:8080

4. Для сборки production-версии:
   npm run build

Готовые файлы будут в папке dist/

## Структура проекта

src/ — исходные файлы проекта

- app.js — точка входа, логика работы интерфейса

- components/calculator.js — основной класс калькулятора

- utils/math-operations.js — функции для вычислений

- styles/ — файлы стилей (calculator.css, theme.css)

index.html — шаблон страницы

webpack.config.js — конфигурация сборки

eslint.config.mjs — настройка линтера

.husky/ — git-хуки для проверки кода перед коммитом

dist/ — итоговая сборка (создаётся автоматически)

## Технологии

- JavaScript

- CSS Grid / Flexbox

- Webpack

- ESLint + Prettier

- Husky + lint-staged
