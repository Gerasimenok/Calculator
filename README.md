# Проект "Калькулятор"

Веб-калькулятор с поддержкой базовых арифметических операций, реализованный на чистом JavaScript.

## Задача

Данный проект реализует простой веб-калькулятор, поддерживающий базовые арифметические операции: сложение, вычитание, умножение, деление, процент и смену знака числа.  
Ссылка на ТЗ: https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f

## Как запустить приложение

1. Клонируйте репозиторий или скачайте файлы проекта.
2. Установите зависимости:
   bash
   npm install
   Для запуска в режиме разработки:
   bash
   Копировать код
   npm run dev
   После этого приложение будет доступно по адресу http://localhost:8080

Для production-сборки:
bash
Копировать код
npm run build
После сборки проект будет находиться в папке dist/ (2 файла: index.html и минифицированный JS).

Также можно просто открыть index.html напрямую в браузере (Chrome, Edge, Firefox).

Опционально: запуск через VSCode Live Server:
bash
Копировать код
live-server

## Структура проекта

calculator/
├── .husky/ # Git hooks (pre-commit: ESLint + Prettier)
│ └── pre-commit
├── index.html # Главный HTML-файл
├── src/ # Исходный код приложения
│ ├── app.js # Точка входа, обработка событий
│ ├── components/ # Основные классы приложения
│ │ └── calculator.js # Класс Calculator: управление состоянием, вычисления
│ ├── utils/ # Вспомогательные функции
│ │ └── math-operations.js # Математические функции: add, subtract, multiply, divide, percent, toggleSign
│ └── styles/ # Стилизация
│ └── calculator.css # Визуальное оформление калькулятора
├── .gitignore # Исключения для Git (node_modules, dist и др.)
├── dist/ # Production-сборка (генерируется автоматически)
├── webpack.config.js # Конфигурация сборки
├── eslint.config.mjs # Конфигурация ESLint
├── package.json # Зависимости и скрипты npm
├── package-lock.json
└── README.md # Документация

## Технологии

Чистый JavaScript
CSS Grid/Flexbox для адаптивного дизайна
Webpack для сборки и оптимизации
ESLint + Prettier — единый стиль и качество кода
Husky + lint-staged — автоматическая проверка кода при коммите
