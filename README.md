<div align="center">

# GlavStroyBlock

**Warehouse employee UI mock — receive goods, issue stock, orders, and print forms.**

[![Live demo](https://img.shields.io/badge/demo-GitHub%20Pages-2e5a88?style=flat-square)](https://krwg.github.io/glavstroyblock/)
[![Stack](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-6b7f72?style=flat-square)](index.html)
[![Theme](https://img.shields.io/badge/themes-light%20%7C%20dark-4a5568?style=flat-square)](#demo)

</div>

---

**GlavStroyBlock** (ГлавСтройБлок) is a **static front-end prototype** for a construction-materials warehouse: login screen, product catalog, storage locations, goods receipt and issue flows, order list, document printing, and settings.

Built as a **layout and UX exercise** — no backend, no real auth. Buttons and forms demonstrate interactions with client-side JavaScript only.

**[→ Open demo](https://krwg.github.io/glavstroyblock/)** · Light theme starts at [`log.html`](log.html) · Dark at [`d.log.html`](d.log.html)

---

## Demo

| Entry | Description |
|-------|-------------|
| **[index.html](index.html)** | Landing — pick light or dark theme |
| **Light** (`*.html`) | Default `style.css` palette |
| **Dark** (`d.*.html`) | Same screens with `dark.css` |

### Screens (RU UI)

- **Вход / Регистрация** — tabbed auth mock with social buttons
- **Товары** — product list and stock display
- **Места хранения** — storage locations
- **Приемка / Выдача** — receive and issue workflows
- **Заказы** — order list with accept/delete demo actions
- **Печать** — document picker and print/PDF placeholders
- **Настройки** — password change (client-side validation only)

---

## Tech

| Layer | Details |
|-------|---------|
| Markup | 18 HTML pages (9 light + 9 dark mirrors) |
| Styles | `style.css`, `dark.css` |
| Script | `script.js` — tabs, dynamic selects, demo alerts |
| Assets | Logo, avatars, social icons (PNG) |

---

## Run locally

```bash
git clone https://github.com/krwg/glavstroyblock.git
cd glavstroyblock
npx --yes serve .
# open http://localhost:3000
```

---

## Limitations

This is a **design mock**, not production software:

- No API, database, or real authentication
- Print / PDF / password flows use `alert()` placeholders
- Data does not persist between sessions

Suitable for portfolio review, HTML/CSS practice, or as a starting layout for a real warehouse app.

---

## Русский

**ГлавСтройБлок** — верстка интерфейса для сотрудников склада стройматериалов: вход, товары, приёмка, выдача, заказы, печать накладных. Статический HTML/CSS/JS без серверной части.

**[Демо на GitHub Pages](https://krwg.github.io/glavstroyblock/)**

---

<div align="center">

Portfolio project by [krwg](https://github.com/krwg) · 2024 layout, 2026 Pages refresh

</div>
