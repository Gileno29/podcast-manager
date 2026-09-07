# 🎙️ Podcast Manager

A RESTful API built with **Node.js** and **TypeScript** designed to manage and categorize video podcast episodes (such as Flow Podcast, Vênus Podcast, etc.). 

The project is built using Node.js native HTTP modules without external web frameworks (like Express or Fastify), following a clean **Layered Architecture** with distinct separation of concerns.

---

## 🚀 Technologies

- [Node.js](https://nodejs.org/) (native `http` module)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://github.com/privatenumber/tsx) (TypeScript execute and watch runner with `.env` file support)
- [tsup](https://tsup.egoist.dev/) (fast TypeScript bundler for production builds)

---

## 🎯 Features

- **List Episodes**: Retrieve all cataloged episodes with complete metadata (podcast name, episode title, video ID, and categories).
- **Filter Episodes by Podcast Name**: Search and filter episodes using query parameters (`?p=name`).
- **Standardized Responses**: Predictable JSON response structure paired with standard HTTP status codes (`200 OK`, `204 No Content`).

---

## 📁 Project Architecture

The application follows a layered architectural pattern to keep responsibilities decoupled:

```text
podcast-manager/
├── docs/                 # Project documentation and specifications
├── src/
│   ├── controllers/      # Handles incoming HTTP requests and formats responses
│   │   └── podcasts-controller.ts
│   ├── models/           # TypeScript interfaces and data transfer models
│   │   ├── podcast-model.ts
│   │   └── response-podcast-model.ts
│   ├── repository/       # Data access layer (JSON file storage)
│   │   ├── podcastrepository.ts
│   │   └── podcasts.json
│   ├── routes/           # Centralized route definitions and enums
│   │   └── routes.ts
│   ├── services/         # Business logic layer
│   │   ├── filter-episodes-service.ts
│   │   └── list-episodes-service.ts
│   ├── utils/            # HTTP helper constants (status codes, methods, content types)
│   │   ├── http-content.ts
│   │   ├── http-methods.ts
│   │   └── http-statuscode.ts
│   ├── app.ts            # Main request dispatcher and routing
│   └── server.ts         # HTTP server bootstrap and initialization
├── .env                  # Environment variables configuration
├── package.json          # Project dependencies and npm scripts
└── tsconfig.json         # TypeScript compiler configuration
```

---

## 🔌 API Endpoints

### 1. List All Episodes

Retrieves a list of all podcast episodes.

- **Method:** `GET`
- **Path:** `/api/list`
- **Example Request:**
  ```bash
  curl -X GET http://localhost:3333/api/list
  ```
- **Response (`200 OK`):**
  ```json
  [
    {
      "podcastName": "flow",
      "episode": "CBUM - Flow #319",
      "videoId": "pQSuQmUfS30",
      "categories": "['saúde', 'esporte', 'bodybuilder']"
    },
    {
      "podcastName": "flow",
      "episode": "RUBENS BARRICHELLO - Flow #339",
      "videoId": "4KDGTdiOV4I",
      "categories": "['esporte', 'corrida']"
    },
    {
      "podcastName": "venus",
      "episode": "Gileno - Venus #102",
      "videoId": "4KDGTdiOV8I",
      "categories": "['esporte', 'corrida']"
    }
  ]
  ```

---

### 2. Filter Episodes by Podcast Name

Filters episodes based on the podcast name provided in the query string.

- **Method:** `GET`
- **Path:** `/api/episode?p={podcastName}`
- **Query Parameters:**
  - `p` *(string)*: Name of the podcast to filter by (e.g., `flow`, `venus`).
- **Example Request:**
  ```bash
  curl -X GET "http://localhost:3333/api/episode?p=flow"
  ```
- **Response (`200 OK`):**
  ```json
  [
    {
      "podcastName": "flow",
      "episode": "CBUM - Flow #319",
      "videoId": "pQSuQmUfS30",
      "categories": "['saúde', 'esporte', 'bodybuilder']"
    },
    {
      "podcastName": "flow",
      "episode": "RUBENS BARRICHELLO - Flow #339",
      "videoId": "4KDGTdiOV4I",
      "categories": "['esporte', 'corrida']"
    }
  ]
  ```
- **Response (`204 No Content`):**
  - Returned when no episodes match the requested filter criteria.

---

## ⚙️ Prerequisites

- **Node.js**: version `v20.6.0` or higher (required for native `--env-file` support).
- **npm**: default Node.js package manager.

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Gileno29/podcast-manager.git
cd podcast-manager
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create or update the `.env` file in the root directory:
```env
port=3333
```

### 4. Run in development mode

Run once:
```bash
npm run start:dev
```

Run with automatic reload on code changes (**watch mode**):
```bash
npm run start:watch
```

The server will start and log:
```text
server iniciou na porta 3333
```

### 5. Build for production
Generate compiled JavaScript bundle inside `dist/`:
```bash
npm run dist
```

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
