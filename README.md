# SWStarter Frontend

Clean React + TypeScript + Vite starter project with Atomic Design structure.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## Typography

- **Poppins** - Used for H1 headings
- **Montserrat** - Used for H2-H6 headings and body text

## Getting Started

### Local Development (without Docker)

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Docker Development

```bash
# Build and start all services (frontend, backend, MySQL, Redis)
docker-compose up -d --build

# Start services (without rebuilding)
docker-compose up -d

# Stop all services
docker-compose down

# View logs from all services
docker-compose logs -f

# View logs from frontend only
docker-compose logs -f frontend

# Restart frontend service
docker-compose restart frontend

# Rebuild frontend after dependency changes
docker-compose up -d --build frontend

# Execute commands inside frontend container
docker-compose exec frontend npm install <package-name>
docker-compose exec frontend npm run build

# Remove all containers and volumes (clean slate)
docker-compose down -v

# Access frontend shell
docker-compose exec frontend sh
```

**Access URLs:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

## Project Structure (Atomic Design)

```
src/
├── components/
│   ├── atoms/        # Basic building blocks (buttons, inputs, labels)
│   ├── molecules/    # Simple component groups (form fields, cards)
│   ├── organisms/    # Complex components (forms, navigation)
│   ├── templates/    # Page layouts
│   └── pages/        # Complete pages
├── App.tsx           # Main application component
├── App.css           # Application styles
├── main.tsx          # Application entry point
└── index.css         # Global styles with CSS variables
```

## CSS Variables

The project uses CSS variables defined in `index.css`:

- `--font-primary`: Poppins (for H1)
- `--font-secondary`: Montserrat (for H2-H6 and body)
- `--color-text`: Text color
- `--color-background`: Background color
- `--color-primary`: Primary brand color
- `--color-primary-hover`: Primary hover state
