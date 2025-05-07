# Team Task Manager

A mobile-responsive web application for managing team task assignments, built with Next.js and Tailwind CSS.

## Features

- Task creation and assignment by admin users
- Task status updates (In Progress, Completed, Blocked)
- User-specific task views
- Responsive design with Akkodis branding
- Local storage for data persistence
- GitHub Pages deployment

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- GitHub Actions (CI/CD)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/team-task-manager.git
   cd team-task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions.

To deploy manually:

1. Build the application:
   ```bash
   npm run build
   ```

2. The built files will be in the `out` directory, ready for deployment.

## Project Structure

```
team-task-manager/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page with user selection
│   │   ├── tasks/
│   │   │   └── page.tsx       # Tasks management page
│   │   └── layout.tsx         # Root layout with navigation
│   ├── store/
│   │   └── taskStore.ts       # Zustand store for state management
│   └── data/
│       └── users.ts           # Mock user data
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 