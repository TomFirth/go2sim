# Technical Assessment: SIM Card Activation Portal

## Overview
Welcome to the technical assessment! Your task is to build a simple, containerised **SIM Card Activation Portal**. 

This challenge is designed to simulate the core workflows we handle in the telecommunications industry, specifically dealing with hardware activation cycles. The goal is to demonstrate your proficiency with a modern TypeScript stack, asynchronous state management, and containerised environments.

---

## Technical Stack
Your solution must be built using the following specific technologies:

*   **Language:** TypeScript
*   **Frontend:** React, Redux Toolkit, Redux-Saga
*   **Backend:** Express
*   **Database:** MySQL via TypeORM
*   **Deployment:** Docker and Docker Compose

---

## Application Requirements

### 1. Database & Backend
*   **Data Models:** Create a `SIMCard` entity with the following fields:
    *   `id` (Primary Key, Auto-increment)
    *   `iccid` (String, representing the unique 19-digit SIM serial number)
    *   `phoneNumber` (String, auto-generated upon successful activation)
    *   `status` (Enum: `pending`, `active`, or `failed`)
*   **API Endpoints:**
    *   `GET /api/sims`: Fetch a history of all SIM activation logs.
    *   `POST /api/sims/activate`: Accept an `iccid` payload. To simulate network behavior, randomly assign either an `active` status (with a generated phone number) or a `failed` status to the record.
*   **Persistence:** Ensure all records persist in the MySQL container across container restarts.

### 2. Frontend & State Management
*   **User Interface:**
    *   An input form requiring a 19-digit SIM card ICCID number and an "Activate SIM" submit button.
    *   A dashboard area or table displaying all registered SIM cards and their real-time activation statuses.
*   **Redux Store:** Manage the SIM records and global loading/error states using Redux Toolkit slices.
*   **Asynchronous Actions:** Use Redux-Saga to intercept the activation action, dispatch the API request to the backend, and handle the response.
*   **User Feedback:** Provide clear, immediate visual feedback (such as a success toast notification or an error alert banner) once the saga completes and updates the global store.

### 3. Containerisation
*   **Dockerfiles:** Provide production-ready or development-optimised Dockerfiles for both the frontend and backend applications.
*   **Orchestration:** Create a `docker-compose.yml` file tying together the frontend, backend, and MySQL database.
*   **Bootstrap:** The reviewer must be able to spin up the entire multi-container architecture locally using a single command: `docker-compose up --build`.

---

## Evaluation Criteria
Your submission will be reviewed based on:

*   **Code Architecture:** Clear separation of concerns, logical folder structures, and readable code.
*   **Type Safety:** Robust use of TypeScript types, generics, and interfaces across the full stack.
*   **State Management:** Proper setup of Redux Toolkit slices and correct implementation of Saga side-effect generators.
*   **DevOps Fundamentals:** Correct container linking, volume management for data persistence, and clean Dockerfiles.

## Please submit your code in a zipped folder excluding node_modules and we will get back to you.