# Gonard Web

Vite-based React starter with React Router and Tailwind CSS already configured.

The app now includes a route-aware React loader and client-side SEO management with structured data via React Helmet Async.

## Stack

- Vite
- React 19
- React Router
- React Helmet Async
- Nodemailer for the backend-ready contact mail handler
- Tailwind CSS v4 via the Vite plugin

## Routes

- `/` home page
- `/stack` stack overview page
- `/contact` placeholder contact page
- `*` not found page

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates the production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Development

Use a current Node.js runtime, install dependencies with `npm install`, then start working with `npm run dev`.

Tailwind utilities are available globally through [src/index.css](src/index.css), and route definitions live in [src/App.jsx](src/App.jsx).

SEO metadata and JSON-LD schema are managed centrally in [src/seo/siteMetadata.js](src/seo/siteMetadata.js), while the full-screen loader is rendered from [src/components/SiteLoader.jsx](src/components/SiteLoader.jsx).

The reusable consultation form lives in [src/components/ReusableContactForm.jsx](src/components/ReusableContactForm.jsx). A backend-ready Nodemailer handler template is available in [api/contact.js](api/contact.js), and the required environment variables are listed in [.env.example](.env.example).

## Firebase Deployment

This project is configured for Firebase Hosting with a Firebase Function for `/api/contact`.

- Run `npm install` in the project root.
- Run `npm install` inside the `functions` folder.
- Log in with `npm run firebase:login`.
- Select or pass a Firebase project with `npx firebase-tools use <project-id>` or `npx firebase-tools deploy --project <project-id>`.
- Set the required Firebase function secrets:
	- `npx firebase-tools functions:secrets:set SMTP_HOST`
	- `npx firebase-tools functions:secrets:set SMTP_PORT`
	- `npx firebase-tools functions:secrets:set SMTP_SECURE`
	- `npx firebase-tools functions:secrets:set SMTP_USER`
	- `npx firebase-tools functions:secrets:set SMTP_PASS`
	- `npx firebase-tools functions:secrets:set CONTACT_TO_EMAIL`
	- `npx firebase-tools functions:secrets:set CONTACT_FROM_EMAIL`
- Deploy with `npm run firebase:deploy:full`.

Hosting rewrites all app routes to `index.html` and sends `/api/contact` to the Firebase Function named `contact` in the `asia-south1` region.
