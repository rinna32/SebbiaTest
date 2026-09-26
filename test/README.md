# Новости

Мини-сервис новостей на Nuxt 4 и Tailwind CSS: категории → список новостей с пейджингом → новость.

Монолит: фронтенд (`app/`) и бэкенд (`server/`) работают в одном приложении, данные лежат в `server/data/news.ts`.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## API

- `GET /api/categories` — категории
- `GET /api/categories/:id/news?page=0` — новости категории, по 10 на страницу
- `GET /api/news/:id` — полная новость
