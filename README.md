# Kontivio Website

![CI](https://github.com/Khaled-Sherif/Kontivio-Website/actions/workflows/main.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-20-brightgreen)
![Python](https://img.shields.io/badge/python-3.13-blue)

Marketing and service website for **Kontivio** — a customer experience outsourcing company offering multilingual live chat, voice, email, social media, and AI-augmented support.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Getting Started — Frontend](#getting-started--frontend)
- [Getting Started — Backend](#getting-started--backend)
- [Docker (full stack)](#docker-full-stack)
- [Internationalisation](#internationalisation)
- [Testing](#testing)
- [CI/CD](#cicd)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + TypeScript, Vite 7 |
| Styling | Tailwind CSS v4, custom CSS (`kontivio.css`) |
| Routing | React Router v6 |
| i18n | Custom context-based provider (EN, DE, NL, ES, FR, IT) |
| Testing | Vitest + Testing Library + jsdom |
| Backend | Django 5.1, Django REST Framework 3.15 |
| Auth | SimpleJWT |
| Task queue | Celery 5.4 + Redis 7 |
| Database | PostgreSQL 16 |
| Storage | Cloudflare R2 (via django-storages + boto3) |
| Email | SMTP (Zoho Mail in production, Gmail in dev) |
| Containerisation | Docker + Docker Compose |

---

## Project Structure

```
Kontivio-Website/
├── my-app/                     # React frontend
│   ├── src/
│   │   ├── App.tsx             # Router + page registry
│   │   ├── components/         # One file per page or section
│   │   │   └── common/         # Shared helpers (ImageWithFallback)
│   │   ├── i18n/               # Language provider + locale files
│   │   │   └── locales/        # en.ts, de.ts, nl.ts, es.ts, fr.ts, it.ts
│   │   ├── styles/
│   │   │   └── kontivio.css    # Global brand styles & animations
│   │   └── lib/utils.ts        # cn() utility (clsx + tailwind-merge)
│   ├── vite.config.ts
│   └── package.json
│
├── backend/                    # Django API
│   ├── apps/
│   │   ├── blog/               # Blog posts
│   │   ├── careers/            # Job listings + applications
│   │   └── contacts/           # Contact form submissions
│   ├── config/
│   │   ├── settings/           # base / development / production
│   │   └── celery.py
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   ├── Dockerfile
│   └── requirements/
│       ├── base.txt
│       ├── development.txt
│       └── production.txt
│
└── .github/workflows/main.yml  # CI pipeline
```

---

## Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HomePage` | Landing page with Hero, Services, Industries, FAQ, CTA |
| `/services` | `ServicesPage` | Full services overview |
| `/services/customer-support` | `CustomerSupportSolutions` | Live chat, voice, email, social |
| `/services/technology` | `TechnologySolutionsPage` | AI agents, analytics & QA |
| `/services/technology-partners` | `TechnologyPartnersPage` | Salesforce, Zendesk, HubSpot, etc. |
| `/services/business-development` | `BusinessDevelopmentPage` | Growth & outreach services |
| `/industries` | `Industries` | Supported verticals (e-commerce, healthcare, SaaS…) |
| `/about` | `AboutUs` | Company overview |
| `/about/our-story` | `OurStoryPage` | Company history |
| `/about/board` | `BoardOfDirectorsPage` | Leadership team |
| `/pricing` | `PricingPage` | Pricing plans |
| `/pricing/recommend` | `PricingRecommender` | Interactive plan picker |
| `/careers` | `Careers` | Open positions |
| `/careers/apply` | `ApplyNow` | Application form |
| `/blog` | `Blog` | Articles |
| `/contact` | `ContactUs` | Contact form |

---

## Getting Started — Frontend

**Prerequisites:** Node 20+

```bash
cd my-app
npm install
npm run dev          # http://localhost:5173
```

### Useful scripts

```bash
npm run build        # TypeScript check + Vite production build
npm run lint         # ESLint
npm run test         # Run all tests once (Vitest)
npm run test:watch   # Watch mode
npm run test:ui      # Vitest browser UI
```

Run a single test file:

```bash
npx vitest run src/components/Hero.test.tsx
```

---

## Getting Started — Backend

**Prerequisites:** Python 3.13, PostgreSQL 16, Redis 7

```bash
cd backend

# Create and activate a virtual environment
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements/development.txt

# Configure environment
cp .env.example .env
# Edit .env — set DATABASE_URL, SECRET_KEY, etc.

# Apply migrations and start
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver      # http://localhost:8000

# Start Celery worker (separate terminal)
celery -A config worker -l info
```

---

## Docker (full stack)

Starts PostgreSQL, Redis, the Django API, and a Celery worker together:

```bash
cd backend
cp .env.example .env   # fill in required values
docker compose up --build
```

| Service | URL |
|---|---|
| Django API | http://localhost:8000 |
| Django Admin | http://localhost:8000/admin |
| PostgreSQL | localhost:5432 |
| Redis | localhost:6379 |

For production deployment use `docker-compose.prod.yml`.

---

## Internationalisation

The frontend ships with six locales under `src/i18n/locales/`:

| Code | Language |
|---|---|
| `en` | English (default) |
| `de` | German |
| `nl` | Dutch |
| `es` | Spanish |
| `fr` | French |
| `it` | Italian |

All user-visible strings are keyed through the `t()` hook (`useT()` / `useI18n()`). To add a new key, add it to `en.ts` first, then mirror it in every other locale file.

---

## Testing

Tests live next to components as `*.test.tsx` files and use **Vitest** + **@testing-library/react**.

```bash
npm run test          # single run
npm run test:watch    # re-runs on file change
npm run test:ui       # interactive browser UI
```

Components that consume the language context must be wrapped with `I18nProvider` (or have the context mocked) in their test files.

---

## CI/CD

GitHub Actions (`.github/workflows/main.yml`) runs on every push and pull request to `main`:

1. Checkout code
2. Set up Node 20 with npm cache
3. `npm install`
4. `npm run build` (TypeScript + Vite)

---

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and fill in the values below.

| Variable | Description |
|---|---|
| `DJANGO_SECRET_KEY` | Django secret key (50+ random chars in production) |
| `DJANGO_SETTINGS_MODULE` | `config.settings.development` or `config.settings.production` |
| `DEBUG` | `True` in development, `False` in production |
| `ALLOWED_HOSTS` | Comma-separated list of allowed hostnames |
| `CORS_ALLOWED_ORIGINS` | Comma-separated frontend origins |
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `EMAIL_HOST` | SMTP host (`smtp.zoho.eu` / `smtp.gmail.com`) |
| `EMAIL_PORT` | SMTP port (587) |
| `EMAIL_HOST_USER` | SMTP username |
| `EMAIL_HOST_PASSWORD` | SMTP password |
| `ADMIN_EMAIL` | Recipient for admin notifications |
| `HR_EMAIL` | Recipient for career application emails |
| `R2_BUCKET_NAME` | Cloudflare R2 bucket (production only) |
| `R2_ENDPOINT_URL` | Cloudflare R2 endpoint URL (production only) |
| `R2_ACCESS_KEY_ID` | Cloudflare R2 access key (production only) |
| `R2_SECRET_ACCESS_KEY` | Cloudflare R2 secret key (production only) |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a pull request against `main`

Please keep frontend strings in the i18n locale files (not hardcoded in components) and write a co-located `*.test.tsx` for any new component.

---

## License

This project is licensed under the MIT License.
