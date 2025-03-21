# AFFORDMED Evaluation - Frontend and Backend

This repository contains the frontend and backend code for the AFFORDMED evaluation. The project includes:

1. **Frontend**: A React-based Social Media Analytics Dashboard.
2. **Backend**: An Average Calculator Microservice built with Express.js.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Challenges Faced](#challenges-faced)
- [Future Improvements](#future-improvements)

---

## Features

### Frontend
- **Top Users**: Displays the top 5 users with the highest number of posts.
- **Trending Posts**: Shows the post(s) with the maximum number of comments.
- **Feed**: Displays posts in real-time, with the newest posts appearing at the top.
- **Responsive Design**: Works seamlessly on both mobile and desktop devices.
- **Material UI**: Modern and clean UI components for a better user experience.

### Backend
- **Average Calculator Microservice**:
  - Fetches numbers from a third-party API based on the type (prime, Fibonacci, even, random).
  - Implements a sliding window of size 10 to calculate the average.
  - Ensures unique numbers and handles slow API responses (timeout: 500ms).

---

## Technologies Used

### Frontend
- **React**: JavaScript library for building the user interface.
- **Vite**: Fast build tool for React development.
- **TypeScript**: Adds static typing to JavaScript.
- **Material UI**: Component library for styling and responsive design.
- **Axios**: For making API requests.

### Backend
- **Express.js**: Framework for building the backend server.
- **Node.js**: JavaScript runtime for server-side development.
- **Axios**: For making API requests to the third-party server.

---

## Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/2201093CS.git
   cd 2201093CS