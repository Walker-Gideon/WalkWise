# WalkWise

WalkWise is a study companion app built to help students manage notes, flashcards, schedules, and motivation in one place. It started as a Level 300 mini-project and has since been refined into a more complete, production-style application — including an AI-powered study assistant.

**Live app:** [walk-wise-five.vercel.app](https://walk-wise-five.vercel.app/)

## Features

- **Notes** — create, search, and organize study notes with a rich text editor (Tiptap), including formatting like highlights, underline, and text alignment.
- **Flashcards** — build flashcard decks for active recall study sessions, track mastery over time, and review past performance.
- **Schedule** — plan study sessions and keep track of study time and streaks.
- **Inspire** — motivational content to help students stay consistent with their study habits.
- **AI Study Assistant** — an in-app chatbot scoped specifically to academic help. It assists with explaining concepts, study techniques, and organizing study plans, while staying on-topic and redirecting unrelated questions back to studying.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS 4
- **Routing:** React Router v7
- **State & Data:** TanStack Query, React Context
- **Forms:** React Hook Form
- **Rich Text Editing:** Tiptap
- **Animation:** Motion (Framer Motion)
- **Backend / Auth / Database:** Firebase
- **Image Uploads:** Cloudinary
- **Notifications:** React Hot Toast
- **Markdown Rendering:** react-markdown (used for AI chat responses)

## AI Chat Architecture

The AI assistant is powered by Groq's API, but the API key is never exposed to the client. Chat requests are routed through a dedicated backend proxy:

```
WalkWise (Vercel) → walkwise-proxy (Render) → Groq API
```

The proxy server lives in a separate repository: **[walkwise-proxy](https://github.com/Walker-Gideon/walkwise-proxy)**. It handles the API call server-side, keeping credentials secure and out of the frontend bundle.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A Firebase project with Authentication and Firestore enabled
- A running instance of [walkwise-proxy](https://github.com/Walker-Gideon/walkwise-proxy) (for the AI chat feature)

### Installation

```bash
git clone https://github.com/Walker-Gideon/walkwise.git
cd walkwise
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your own values:

```bash
cp .env.example .env
```

```
# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=

# Cloudinary (used for image uploads)
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UPLOAD_PRESET=
```

> Note: the AI chat feature calls the `walkwise-proxy` server directly (its URL is set inside the chat feature's code), not through a `VITE_` environment variable — this is intentional, since the proxy is what keeps the underlying AI provider's API key secure.

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure (High Level)

```
src/
├── assets/            # Static assets (images, icons, etc.)
├── authentication/    # Login, signup, password reset flows
├── components/        # Shared/reusable components
├── contexts/          # React Context providers (Chat, Navigation, etc.)
├── data/              # Static or seed data
├── features/          # Feature-specific modules (chat, notes, flashcards, schedule)
├── helper/            # Helper/utility functions
├── hook/              # Shared custom hooks
├── landingPage/        # Public landing page
├── navigation/         # App navigation/sidebar
├── service/             # Firebase and API service layers
├── ui/                  # Base UI components (buttons, inputs, layout primitives)
├── user/                # User profile and account-related logic
├── utils/               # General utility functions
```

## Related Repository

- [walkwise-proxy](https://github.com/Walker-Gideon/walkwise-proxy) — the backend proxy server that secures the AI chat feature's API key.

## Status

This project is actively maintained as a personal/portfolio project beyond its original academic scope.
