**Description**: Simple React application for filtering users and posts, featuring seamless API integration.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Local Development](#local-development)
  - [Running with Docker](#running-with-docker)
- [Running Tests](#running-tests)

## Features

- **User and Post Filtering**: Filter and search users and posts efficiently.
- **API Integration**: Fetch and display data from a REST API with Axios and TanStack Query.
- **Debounced Search**: Optimized search with debounce functionality to minimize API calls.
- **Responsive Design**: Built with responsive styles for a better user experience on various devices.
- **Pagination**: Navigate through multiple pages of posts.
- **Dynamic Query Handling**: Use URL search parameters to manage query states.
- **Testing**: Includes unit tests for components and hooks to ensure code quality.

## Getting Started

### Local Development

To run the application locally, follow these steps:

1. **Clone the Repository**:

```bash
git clone https://github.com/AdrianTworek/challenge.git
cd challenge
```

2. **Create a `.env` File**:
   Create a `.env` file in the root of the project directory and add the following variable:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

3. **Install Dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed.

```bash
pnpm install
```

4. **Run the Development Server**:

```bash
pnpm dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

### Running with Docker

To run the application using Docker and Docker Compose, follow these steps:

1. **Create a `.env` File**:

Create a `.env` file in the root of the project directory with the following content:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

2. **Build and Run the Application**:

```bash
docker compose up --build
```

This will build the Docker image and start the container. The application will be accessible at `http://localhost:5173`

3. **Stopping the Application**:

To stop the application and remove the container, run:

```bash
docker compose down
```

## Running Tests

To run the tests, use the following command:

```bash
pnpm test
```

This will execute the unit tests using Vitest.
