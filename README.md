# vocalis

vocalis is a web application that enables users to create, manage, and deploy automated voice call solutions for a variety of use cases, including wellness check-ins, field work, political campaigns, payment reminders, and more. The app provides tools for building voice-first assistants and integrating voice features into other platforms.

## Features
- Automated wellness check-ins and reminders
- Voice-first assistants for field work and campaigns
- Sentiment analysis and multi-language support
- Payment reminders and empathetic debt collection
- No-code voice plugin for easy integration

## Live Demo

Visit the live site: [https://igor-kan.github.io/vocalis](https://igor-kan.github.io/vocalis)

## Getting Started

### Prerequisites

Ensure you have Node.js (version 18 or higher) and npm installed on your system.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

This will typically start the server on `http://localhost:3000` (or another port if 3000 is in use). Open this URL in your web browser to see the application.

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Project Structure

Here is a brief overview of the project structure:

-   **`public/`**: Contains static assets like images, fonts, etc.
-   **`src/`**: Contains the main source code for your application.
    -   **`assets/`**: Static assets like images, fonts, etc.
    -   **`components/`**: Reusable UI components.
    -   **`config/`**: Configuration files (e.g., for themes, API endpoints).
    -   **`hooks/`**: Custom React hooks.
    -   **`lib/`**: Utility functions and helper modules.
    -   **`pages/`**: Application pages (if using a framework like Next.js with page-based routing).
    -   **`providers/`**: React Context API providers.
    -   **`routes/`**: Route definitions (if using a routing library like React Router).
    -   **`services/`**: Modules for interacting with external APIs.
    -   **`styles/`**: Global styles, CSS modules, or styled-components.
    -   **`App.tsx`**: The main application component.
    -   **`main.tsx`**: The entry point of your application.
-   **`.env.example`**: Example environment variables file. Copy this to `.env` and fill in your actual environment variables.
-   **`.eslintrc.cjs`**: ESLint configuration file.
-   **`.gitignore`**: Specifies intentionally untracked files that Git should ignore.
-   **`index.html`**: The main HTML file for your application.
-   **`package.json`**: Lists project dependencies and scripts.
-   **`README.md`**: This file, providing information about the project.
-   **`tsconfig.json`**: TypeScript configuration file.
-   **`vite.config.ts`**: Vite configuration file.

## Deployment

To deploy your application, you can use a platform like Vercel, Netlify, or your own server.

For Vercel or Netlify, you typically connect your Git repository and configure the build settings. The platform will then automatically build and deploy your application whenever you push changes to the connected branch.

If deploying to your own server, you will need to build the application and then copy the build artifacts to your server.

```bash
npm run build
```

This command will create a `dist` folder (or similar, depending on your build configuration) with the optimized, static assets for your application.

## Custom Domain

Yes, most hosting platforms allow you to connect a custom domain to your deployed application. The exact steps will vary depending on the platform you choose.

Typically, you will need to:

1.  Purchase a domain name from a domain registrar (e.g., GoDaddy, Namecheap).
2.  Configure the DNS settings for your domain to point to your hosting provider's servers.
3.  Add the custom domain to your project settings on the hosting platform.

Consult the documentation of your chosen hosting provider for specific instructions.
