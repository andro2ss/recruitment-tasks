# Recruitment Tasks

Three React applications built with TypeScript, Material-UI, and modern web technologies.

## 🚀 Tech Stack

- **React 18** with **TypeScript**
- **Vite** - Build tool
- **Material-UI (MUI)** - UI components
- **Styled Components** - Custom styling
- **React Router** - Client-side routing
- **React Query** - Server state management
- **React Hook Form** + **Zod** - Forms and validation
- **Vitest** - Unit testing
- **Axios** - HTTP client

## 📋 Projects

### 1. Text Scrambler
Upload a text file and scramble letters in each word while preserving first and last characters. Handles:
- Multi-line text
- Punctuation
- Polish characters (ą, ć, ę, ł, ń, ó, ś, ź, ż)
- Case preservation
- Edge cases (1-2 letter words)

### 2. PESEL Validator
Validate Polish PESEL identification numbers with:
- Official checksum validation
- Date extraction
- Gender detection
- Comprehensive unit tests

### 3. Users Management
Browse and manage users from GoRest API:
- List users with pagination
- Search by name or email
- Edit user information
- Real-time updates with React Query

## 🛠️ Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Visit http://localhost:5173

## 🧪 Testing

```bash
npm test
```

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Atomic design components
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── features/            # Feature modules
│   ├── text-scrambler/
│   ├── pesel-validator/
│   └── users/
├── pages/              # Route pages
├── theme/              # MUI theme & global styles
└── shared/             # Shared utilities
```

## 🎨 Code Conventions

- Arrow functions for components
- TypeScript strict mode
- No FC types (clean arrow functions)
- Self-documenting code (no comments)
- Atomic design pattern
- Feature-based architecture

## ⚠️ Note for Users API

To use the edit functionality in Task 3, you need to:
1. Get an API token from https://gorest.co.in/consumer/login
2. Update the token in `src/features/users/services/usersApi.ts`

## 📄 License

MIT

