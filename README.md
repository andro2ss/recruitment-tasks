# Recruitment Tasks

Three React applications built with TypeScript, Material-UI, and modern web technologies.

🌐 **[Live Demo](https://andro2ss.github.io/recruitment-tasks/)**

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

## 📋 Recruitment Tasks

### Task 1

Write a React program that handles a file upload form for text files, then randomly rearranges the letters in each word while preserving the first and last letter. Take into account punctuation, uppercase/lowercase letters, multi-line texts, and Polish characters.

### Task 2

Write a React program to validate PESEL numbers according to the official format specification. Prepare unit tests checking several invalid data sets and at least one valid PESEL number.

### Task 3

Write a React application that handles the API available at https://gorest.co.in/. The application should have a view displaying a list of users (fetched from the API) and provide the ability to search and edit existing entries.

---

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

## 🔑 Environment Setup

Create a `.env.local` file in the root directory:

```env
VITE_GOREST_API_TOKEN=your-actual-token-here
```

Get your API token from [GoRest.co.in](https://gorest.co.in/consumer/login)

**Important:** Never commit `.env.local` to version control. Use `.env.example` for reference.

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

## 📄 License

MIT