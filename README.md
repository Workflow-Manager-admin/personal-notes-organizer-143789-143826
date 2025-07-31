# Personal Notes Organizer Backend

This is the backend service for the Personal Notes Organizer application. It's a RESTful API built with Express.js that provides endpoints for managing notes.

## Features

-   **CRUD Operations:** Create, Read, Update, and Delete notes.
-   **Authentication:** Uses JSON Web Tokens (JWT) to secure endpoints.
-   **Validation:** Request body validation to ensure data integrity.
-   **API Documentation:** Interactive API documentation powered by Swagger.

## Getting Started

### Prerequisites

-   Node.js and npm installed.

### Installation

1.  Clone the repository.
2.  Navigate to the `notes_backend` directory.
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file from the `.env.example` and set your `JWT_SECRET`.
    ```bash
    cp .env.example .env
    ```
5.  Start the server:
    ```bash
    npm start
    ```

The server will be running at `http://localhost:3000`.

## API Documentation

Interactive API documentation is available at `/docs`.

Example: `http://localhost:3000/docs`

## API Endpoints

### Authentication

-   **`POST /auth/login`**: Get an authentication token.
    -   **Request Body**: `{ "username": "your_username" }`
    -   **Response**: `{ "accessToken": "your_jwt_token" }`

### Notes (Requires Authentication)

To access these endpoints, include the JWT in the `Authorization` header: `Bearer <token>`.

-   **`GET /notes`**: Get all notes.
-   **`POST /notes`**: Create a new note.
    -   **Request Body**: `{ "title": "Note Title", "content": "Note content", "tags": ["tag1", "tag2"] }`
-   **`GET /notes/:id`**: Get a single note by its ID.
-   **`PUT /notes/:id`**: Update an existing note.
-   **`DELETE /notes/:id`**: Delete a note.
