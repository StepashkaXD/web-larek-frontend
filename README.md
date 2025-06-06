# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом
- src/types/ — типы данных
- src/utils/ — утилиты
- src/scss/ — стили

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Архитектура проекта

### Основные компоненты
1. **Модели данных**
   - `IProductItem` - модель товара с полями id, title, description, image, category, price
   - `ICart` и `ICartItem` - модель корзины для хранения выбранных товаров
   - `IOrder`, `IOrderForm`, `IOrderLot` - модели для работы с заказами

2. **Компоненты**
   - `IComponent` - базовый компонент с методами render и destroy
   - `IModal` - модальное окно с методами open и close
   - `IActions` - обработка событий клика

3. **События**
   - `IEventEmitter` - брокер событий для коммуникации между компонентами
   - `EventCallback` - тип для обработчиков событий

## UML Диаграмма проекта

![UML Диаграмма проекта](web-larek-uml-diagram.png)

## Описание проекта

![Описание проекта](excalidraw.png)

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn dev
```

## Сборка

```
npm run build
```

или

```
yarn build
```
