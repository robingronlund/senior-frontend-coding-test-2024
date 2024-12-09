## How to

1. Clone the repository:

   ```bash
   git clone https://github.com/robingronlund/senior-frontend-coding-test-2024.git
   ```

2. Navigate to the directory and install dependencies:

   ```bash
   cd senior-frontend-coding-test-2024 && npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Run tests:

   ```bash
   npm run test
   ```

## Overview

This is a simple app that lets users browse and search for movies using the [OMDb API](http://www.omdbapi.com/).
The features are fairly basic and are primarily meant to serve as discussion points, so keep that in mind when reviewing the code or the UI.

### Features

- Searching
- Filtering
- Sorting
- Layout switching
- Basic routing

## Tech

In addition to the provided foundation, I’ve incorporated the following tools and libraries to help with development:

- [React Router](https://reactrouter.com/home) for navigation
- [React Query](https://tanstack.com/query/latest) for managing API calls
- [Axios](https://axios-http.com/) for HTTP requests

## Assumptions

- The app is not intended to be production-ready.
- There’s no need for CI/CD pipelines or deployment tools.
- Tools like SonarQube or test coverage gates are not included.
- I haven’t focused on production-level architecture or workflows.
- Outdated packages or boilerplate tooling won’t be updated.
- UI work and styling have been intentionally kept minimal.

## Learnings & Intentions

I chose not to use a component library, opting instead to keep the UI work minimal to save time and focus on the app’s core functionality. While it’s hard to leave the UI unfinished, it’s also a good test of efficiency—focusing on the parts that matter most.

I’ve also implemented a feature-driven project structure to reflect my thoughts on how to organize code effectively. Tackling complexity early or setting up a solid foundation to handle it later is something I value.

Working with Emotion.js was a bit of a shift for me since I’ve primarily used Tailwind CSS in recent years. While my approach with Emotion.js could be more refined, it was a great opportunity to explore something new.
