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
