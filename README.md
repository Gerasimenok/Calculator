# Проект "Калькулятор"

Веб-калькулятор с поддержкой базовых арифметических операций, реализованный на чистом JavaScript.

## Задача

Данный проект реализует простой веб-калькулятор, поддерживающий базовые арифметические операции: сложение, вычитание, умножение, деление, процент и смену знака числа.  
[Ссылка на ТЗ](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## Как запустить приложение
### Вариант 1 (Через ZIP-архив):
1. Скачайте ZIP-архив проекта с GitHub.

2. Распакуйте архив в удобную папку.

3. Откройте проект в VS Code (или любом другом редакторе).

4. Откройте встроенный терминал и выполните команды:
```
npm install
npm run dev
```

После этого приложение автоматически откроется в браузере (обычно по адресу http://localhost:8080).

Если браузер не открылся — откройте указанный адрес вручную.

5. Для сборки production-версии:
```
npm run build
```
### Вариант 2(Через Git):
```
git clone https://github.com/Gerasimenok/Calculator.git
cd Calculator
npm install
npm run dev
```

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

## Демо-версия
Ознакомиться с работающей версией можно [здесь](https://Gerasimenok.github.io/Calculator/).
